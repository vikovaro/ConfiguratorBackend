"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguratorService = void 0;
const common_1 = require("@nestjs/common");
const configurator_repository_1 = require("./configurator.repository");
const app_exception_1 = require("./errors/app-exception");
let ConfiguratorService = class ConfiguratorService {
    constructor(configurationRepository) {
        this.configurationRepository = configurationRepository;
    }
    async createConfiguration(createConfigurationDto) {
        const userPrice = createConfigurationDto.price;
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
        if (motherboards.length === 0 ||
            psus.length === 0 ||
            sortedCpus.length === 0 ||
            sortedGpus.length === 0 ||
            sortedRams.length === 0) {
            throw new Error('Один или несколько массивов пусты. Проверьте данные.');
        }
        const cpuBudget = userPrice * 0.3;
        const gpuBudget = userPrice * 0.4;
        const ramBudget = userPrice * 0.1;
        const motherboardBudget = userPrice * 0.1;
        const psuBudget = userPrice * 0.1;
        let bestConfiguration = null;
        let bestPriceDifference = Infinity;
        sortedCpus.sort((a, b) => b.price - a.price);
        sortedGpus.sort((a, b) => b.price - a.price);
        sortedRams.sort((a, b) => b.price - a.price);
        motherboards.sort((a, b) => b.price - a.price);
        psus.sort((a, b) => b.price - a.price);
        const resultText = `
      CPUs: ${JSON.stringify(sortedCpus)} \n
      GPUs: ${JSON.stringify(sortedGpus)} \n
      RAMs: ${JSON.stringify(sortedRams)} \n
      Motherboards: ${JSON.stringify(motherboards)} \n
      PSUs: ${JSON.stringify(psus)}`;
        for (const cpu of sortedCpus) {
            if (cpu.price > cpuBudget)
                continue;
            for (const motherboard of motherboards) {
                if (motherboard.price > motherboardBudget)
                    continue;
                if (motherboard.socket === cpu.socket) {
                    for (const gpu of sortedGpus) {
                        if (gpu.price > gpuBudget)
                            continue;
                        for (const ram of sortedRams) {
                            if (ram.price > ramBudget)
                                continue;
                            const totalPower = cpu.wattage + gpu.wattage;
                            for (const psu of psus) {
                                if (psu.price > psuBudget)
                                    continue;
                                if (psu.wattage >= totalPower) {
                                    const totalPrice = cpu.price +
                                        motherboard.price +
                                        gpu.price +
                                        ram.price +
                                        psu.price;
                                    if (totalPrice <= userPrice) {
                                        const priceDifference = userPrice - totalPrice;
                                        if (priceDifference < bestPriceDifference) {
                                            bestPriceDifference = priceDifference;
                                            bestConfiguration = {
                                                id: 0,
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
            throw new app_exception_1.AppException('Не удалось подобрать конфигурацию в рамках указанного бюджета.');
        }
        const savedConfiguration = await this.configurationRepository.saveConfiguration(bestConfiguration);
        return savedConfiguration;
    }
    async getConfigurationById(id) {
        const configuration = await this.configurationRepository.getConfiguration(id);
        if (!configuration) {
            throw new common_1.NotFoundException();
        }
        return configuration;
    }
    async getAllConfigurations(limit, offset) {
        return await this.configurationRepository.getAllConfiguration(limit, offset);
    }
    async createConfigurationOld1(createConfigurationDto) {
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
        if (motherboards.length === 0 ||
            psus.length === 0 ||
            sortedCpus.length === 0 ||
            sortedGpus.length === 0 ||
            sortedRams.length === 0) {
            throw new Error('Один или несколько массивов пусты. Проверьте данные.');
        }
        let bestConfiguration = null;
        let bestPriceDifference = Infinity;
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
                            const totalPower = cpu.wattage + gpu.wattage + ram.capacity;
                            for (const psu of psus) {
                                if (psu.wattage >= totalPower) {
                                    const totalPrice = cpu.price +
                                        motherboard.price +
                                        gpu.price +
                                        ram.price +
                                        psu.price;
                                    if (totalPrice <= maxPrice) {
                                        const priceDifference = maxPrice - totalPrice;
                                        if (priceDifference < bestPriceDifference) {
                                            bestPriceDifference = priceDifference;
                                            bestConfiguration = {
                                                id: 0,
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
            throw new app_exception_1.AppException('Не удалось подобрать конфигурацию в рамках указанного бюджета.');
        }
        const savedConfiguration = await this.configurationRepository.saveConfiguration(bestConfiguration);
        return savedConfiguration;
    }
};
exports.ConfiguratorService = ConfiguratorService;
exports.ConfiguratorService = ConfiguratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configurator_repository_1.ConfiguratorRepository])
], ConfiguratorService);
//# sourceMappingURL=configurator.service.js.map