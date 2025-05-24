import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguratorController } from './configurator.controller';
import { ConfiguratorService } from '../services/configurator.service';
import { CreateConfigurationRequest } from '../domain/dto/create-configuration.request';
import { GetConfigurationsRequest } from '../domain/dto/get-configurations.request';

describe('ConfiguratorController', () => {
    let controller: ConfiguratorController;

    const mockConfiguratorService = {
        createConfiguration: jest.fn(),
        getConfigurationById: jest.fn(),
        getAllConfigurations: jest.fn()
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ConfiguratorController],
            providers: [
                {
                    provide: ConfiguratorService,
                    useValue: mockConfiguratorService
                }
            ]
        }).compile();

        controller = module.get<ConfiguratorController>(ConfiguratorController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('createConfiguration', () => {
        it('should create a configuration', async () => {
            const createConfigDto: CreateConfigurationRequest = {
                cpu: 'AMD',
                gpu: 'NVIDIA',
                ram: 16,
                price: 1500
            };

            const expectedResult = {
                id: 1,
                cpuId: 1,
                gpuId: 1,
                motherboardId: 1,
                psuId: 1,
                ramId: 1,
                price: 1500,
                createdAt: new Date()
            };

            mockConfiguratorService.createConfiguration.mockResolvedValue(expectedResult);

            const result = await controller.createConfiguration(createConfigDto);

            expect(result).toEqual(expectedResult);
            expect(mockConfiguratorService.createConfiguration).toHaveBeenCalledWith(createConfigDto);
        });
    });

    describe('getConfiguration', () => {
        it('should get a configuration by id', async () => {
            const configId = 1;
            const expectedResult = {
                id: configId,
                cpuId: 1,
                gpuId: 1,
                motherboardId: 1,
                psuId: 1,
                ramId: 1,
                price: 1500,
                createdAt: new Date()
            };

            mockConfiguratorService.getConfigurationById.mockResolvedValue(expectedResult);

            const result = await controller.getConfiguration(configId);

            expect(result).toEqual(expectedResult);
            expect(mockConfiguratorService.getConfigurationById).toHaveBeenCalledWith(configId);
        });
    });

    describe('getAllConfigurations', () => {
        it('should get all configurations with pagination', async () => {
            const getConfigsDto: GetConfigurationsRequest = {
                limit: 10,
                offset: 0
            };

            const expectedResult = {
                configurations: [
                    {
                        id: 1,
                        cpuId: 1,
                        gpuId: 1,
                        motherboardId: 1,
                        psuId: 1,
                        ramId: 1,
                        price: 1500,
                        createdAt: new Date()
                    }
                ],
                total: 1
            };

            mockConfiguratorService.getAllConfigurations.mockResolvedValue(expectedResult);

            const result = await controller.getAllConfigurations(getConfigsDto);

            expect(result).toEqual(expectedResult);
            expect(mockConfiguratorService.getAllConfigurations).toHaveBeenCalledWith(
                getConfigsDto.limit,
                getConfigsDto.offset
            );
        });
    });
});