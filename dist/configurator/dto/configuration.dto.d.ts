import { CpuResponse, ICpuResponse } from './cpu.dto';
import { GpuResponse, IGpuResponse } from './gpu.dto';
import { IMotherBoardResponse, MotherBoardResponse } from './motherboard.dto';
import { IPsuResponse, PsuResponse } from './psu.dto';
import { IRamResponse, RamResponse } from './ram.dto';
export declare class ConfigurationResponse implements IConfigurationResponse {
    id: number;
    cpu: CpuResponse;
    gpu: GpuResponse;
    motherboard: MotherBoardResponse;
    psu: PsuResponse;
    ram: RamResponse;
    price: number;
}
export interface IConfigurationResponse {
    id: number;
    cpu: ICpuResponse;
    gpu: IGpuResponse;
    motherboard: IMotherBoardResponse;
    psu: IPsuResponse;
    ram: IRamResponse;
    price: number;
}
