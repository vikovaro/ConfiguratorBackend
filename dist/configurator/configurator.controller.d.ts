import { ConfiguratorService } from './configurator.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { GetConfigurationsDto } from './dto/get-configurations.dto';
export declare class ConfiguratorController {
    private readonly configuratorService;
    constructor(configuratorService: ConfiguratorService);
    createConfiguration(createConfigurationDto: CreateConfigurationDto): Promise<import("./dto/configuration.dto").IConfigurationResponse>;
    getConfiguration(id: number): Promise<import("./dto/configuration.dto").IConfigurationResponse>;
    getAllConfigurations(getConfigurationsDto: GetConfigurationsDto): Promise<import("./dto/get-configurations.response").IGetConfigurationResponse>;
}
