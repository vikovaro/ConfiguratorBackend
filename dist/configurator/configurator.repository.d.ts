import { PrismaClient } from '@prisma/client';
import { IConfigurationResponse } from './dto/configuration.dto';
import { ICpuResponse } from './dto/cpu.dto';
import { IGpuResponse } from './dto/gpu.dto';
import { IMotherBoardResponse } from './dto/motherboard.dto';
import { IPsuResponse } from './dto/psu.dto';
import { IRamResponse } from './dto/ram.dto';
import { IGetConfigurationResponse } from './dto/get-configurations.response';
export declare class ConfiguratorRepository {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    getConfiguration(id: number): Promise<IConfigurationResponse>;
    saveConfiguration(configuration: IConfigurationResponse): Promise<IConfigurationResponse>;
    getAllConfiguration(limit: number, offset: number): Promise<IGetConfigurationResponse>;
    getAllCpus(): Promise<ICpuResponse[]>;
    getAllGpus(): Promise<IGpuResponse[]>;
    getAllMotherBoards(): Promise<IMotherBoardResponse[]>;
    getAllPsus(): Promise<IPsuResponse[]>;
    getAllRam(): Promise<IRamResponse[]>;
}
