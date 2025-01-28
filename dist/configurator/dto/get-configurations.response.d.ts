import { ConfigurationResponse, IConfigurationResponse } from './configuration.dto';
export declare class GetConfigurationsResponse implements IGetConfigurationResponse {
    count: number;
    configurations: ConfigurationResponse[];
}
export interface IGetConfigurationResponse {
    configurations: IConfigurationResponse[];
    count: number;
}
