import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfiguratorRepository } from './configurator.repository';
import { CreateConfigurationDto } from './domain/dto/create-configuration.dto';
import { IConfigurationResponse } from './domain/dto/configuration.dto';
import { AppException } from './errors/app-exception';
import { IGetConfigurationResponse } from './domain/dto/get-configurations.response';
import { ICpuResponse } from './domain/dto/cpu.dto';
import { IGpuResponse } from './domain/dto/gpu.dto';

type Segment = 'low' | 'mid' | 'high';

@Injectable()
export class ConfiguratorService {
    constructor(private readonly configurationRepository: ConfiguratorRepository) {}

    async getTargetSegment(budget: number): Promise<Segment> {
        if (budget < 60000) return 'low';
        if (budget < 140000) return 'mid';
        return 'high';
    }

    private segmentPriceRanges: Record<'cpu' | 'gpu', Record<Segment, [number, number]>> = {
        cpu: {
            low: [0, 12000],
            mid: [12001, 30000],
            high: [30001, 100000],
        },
        gpu: {
            low: [0, 29000],
            mid: [30000, 200000],
            high: [71000, 200000],
        },
    };

    private filterBySegment<T extends { price: number }>(
        items: T[],
        type: 'cpu' | 'gpu',
        segment: Segment,
    ): T[] {
        const [minPrice, maxPrice] = this.segmentPriceRanges[type][segment];
        return items
            .filter((item) => item.price >= minPrice && item.price <= maxPrice)
            .sort((a, b) => b.price - a.price);
    }

    async getCpusBySegment(cpus: ICpuResponse[], segment: Segment): Promise<ICpuResponse[]> {
        return this.filterBySegment(cpus, 'cpu', segment);
    }

    async getGpusBySegment(gpus: IGpuResponse[], segment: Segment): Promise<IGpuResponse[]> {
        return this.filterBySegment(gpus, 'gpu', segment);
    }

    async createConfiguration(
        createConfigurationDto: CreateConfigurationDto,
    ): Promise<IConfigurationResponse> {
        const userPrice = createConfigurationDto.price;
        const segment = await this.getTargetSegment(userPrice);

        const [allCpus, allGpus, allRams, allMotherboards, allPsus] = await Promise.all([
            this.configurationRepository.getAllCpus(),
            this.configurationRepository.getAllGpus(),
            this.configurationRepository.getAllRam(),
            this.configurationRepository.getAllMotherBoards(),
            this.configurationRepository.getAllPsus(),
        ]);

        const cpus = await this.getCpusBySegment(
            createConfigurationDto.cpu
                ? allCpus.filter((cpu) => cpu.manufacturer === createConfigurationDto.cpu)
                : allCpus,
            segment,
        );

        const gpus = await this.getGpusBySegment(
            createConfigurationDto.gpu
                ? allGpus.filter((gpu) => gpu.manufacturer === createConfigurationDto.gpu)
                : allGpus,
            segment,
        );

        const rams = createConfigurationDto.ram
            ? allRams.filter((ram) => ram.capacity === createConfigurationDto.ram)
            : allRams;

        if (!cpus.length || !gpus.length || !rams.length || !allMotherboards.length || !allPsus.length) {
            throw new AppException('Не удалось подобрать компоненты по заданным критериям.');
        }

        let bestConfiguration: IConfigurationResponse | null = null;
        let bestScore = -Infinity;

        for (const cpu of cpus) {
            for (const motherboard of allMotherboards) {
                const isCompatible =
                    motherboard.socket === cpu.socket &&
                    motherboard.cpuManufacturer === cpu.manufacturer;

                if (!isCompatible) continue;

                for (const gpu of gpus) {
                    if (motherboard.port !== gpu.port) continue;

                    for (const ram of rams) {
                        const totalWattage = cpu.wattage + gpu.wattage;
                        const suitablePsus = allPsus.filter(
                            (psu) => psu.wattage >= totalWattage * 1.2,
                        );

                        for (const psu of suitablePsus) {
                            const totalPrice =
                                cpu.price + motherboard.price + gpu.price + ram.price + psu.price;

                            if (totalPrice > userPrice) continue;

                            const performanceScore =
                                cpu.price * 0.25 +
                                gpu.price * 0.5 +
                                ram.capacity * 100 +
                                cpu.frequency * 5 +
                                gpu.frequency * 3;

                            const utilizationScore = 1 - (userPrice - totalPrice) / userPrice;

                            const score = 0.6 * performanceScore + 0.4 * utilizationScore;

                            if (score > bestScore) {
                                bestScore = score;
                                bestConfiguration = {
                                    id: 0,
                                    cpu,
                                    gpu,
                                    motherboard,
                                    ram,
                                    psu,
                                    price: totalPrice,
                                };
                            }
                        }
                    }
                }
            }
        }

        if (!bestConfiguration) {
            throw new AppException('Не удалось собрать конфигурацию в рамках бюджета.');
        }

        return await this.configurationRepository.saveConfiguration(bestConfiguration);
    }

    async getConfigurationById(id: number) {
        const configuration = await this.configurationRepository.getConfiguration(id);

        if (!configuration) {
            throw new NotFoundException();
        }

        return configuration;
    }

    async getAllConfigurations(limit: number, offset: number): Promise<IGetConfigurationResponse> {
        return await this.configurationRepository.getAllConfiguration(limit, offset);
    }

    async createConfigurationOld1(
        createConfigurationDto: CreateConfigurationDto,
    ): Promise<IConfigurationResponse> {
        const userPrice = createConfigurationDto.price;
        const maxPrice = userPrice + 3000;

        const cpus = await this.configurationRepository.getAllCpus();
        const gpus = await this.configurationRepository.getAllGpus();
        const rams = await this.configurationRepository.getAllRam();
        const motherboards = await this.configurationRepository.getAllMotherBoards();
        const psus = await this.configurationRepository.getAllPsus();

        const sortedCpus = createConfigurationDto.cpu
            ? cpus.filter((cpu) => cpu.manufacturer === createConfigurationDto.cpu)
            : cpus;

        const sortedGpus = createConfigurationDto.gpu
            ? gpus.filter((gpu) => gpu.manufacturer === createConfigurationDto.gpu)
            : gpus;

        const sortedRams = createConfigurationDto.ram
            ? rams.filter((ram) => ram.capacity === createConfigurationDto.ram)
            : rams;

        if (
            motherboards.length === 0 ||
            psus.length === 0 ||
            sortedCpus.length === 0 ||
            sortedGpus.length === 0 ||
            sortedRams.length === 0
        ) {
            throw new AppException(
                'Не удалось подобрать конфигурацию в рамках указанного бюджета.',
            );
        }

        let bestConfiguration: IConfigurationResponse | null = null;
        let bestPriceDifference = Infinity;

        // Сортируем компоненты по цене (от дорогих к дешевым)
        sortedCpus.sort((a, b) => b.price - a.price);
        sortedGpus.sort((a, b) => b.price - a.price);
        sortedRams.sort((a, b) => b.price - a.price);
        motherboards.sort((a, b) => b.price - a.price);
        psus.sort((a, b) => b.price - a.price);

        for (const cpu of sortedCpus) {
            for (const motherboard of motherboards) {
                if (motherboard.socket === cpu.socket) {
                    for (const gpu of sortedGpus) {
                        for (const ram of sortedRams) {
                            const totalPower = cpu.wattage + gpu.wattage + ram.capacity; // Пример расчета мощности
                            for (const psu of psus) {
                                if (psu.wattage >= totalPower) {
                                    const totalPrice =
                                        cpu.price +
                                        motherboard.price +
                                        gpu.price +
                                        ram.price +
                                        psu.price;
                                    if (totalPrice <= maxPrice) {
                                        const priceDifference = maxPrice - totalPrice; // Насколько близко к бюджету
                                        if (priceDifference < bestPriceDifference) {
                                            bestPriceDifference = priceDifference;
                                            bestConfiguration = {
                                                id: 0, // Временное значение, будет заменено при сохранении в БД
                                                cpu,
                                                gpu,
                                                motherboard,
                                                psu,
                                                ram,
                                                price: totalPrice,
                                            };
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (!bestConfiguration) {
            throw new AppException(
                'Не удалось подобрать конфигурацию в рамках указанного бюджета.',
            );
        }

        // Сохранение конфигурации в БД
        const savedConfiguration =
            await this.configurationRepository.saveConfiguration(bestConfiguration);

        return savedConfiguration;
    }
}
