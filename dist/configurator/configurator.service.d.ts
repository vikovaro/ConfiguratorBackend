import { ConfiguratorRepository } from './configurator.repository';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { IConfigurationResponse } from './dto/configuration.dto';
import { IGetConfigurationResponse } from './dto/get-configurations.response';
export declare class ConfiguratorService {
    private readonly configurationRepository;
    constructor(configurationRepository: ConfiguratorRepository);
    createConfiguration(createConfigurationDto: CreateConfigurationDto): Promise<IConfigurationResponse>;
    getConfigurationById(id: number): Promise<IConfigurationResponse>;
    getAllConfigurations(limit: number, offset: number): Promise<IGetConfigurationResponse>;
    createConfigurationOld1(createConfigurationDto: CreateConfigurationDto): Promise<IConfigurationResponse>;
}
