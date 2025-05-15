import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { CpuResponse, ICpuResponse } from './cpu.dto';
import { GpuResponse, IGpuResponse } from './gpu.dto';
import { IMotherBoardResponse, MotherBoardResponse } from './motherboard.dto';
import { IPsuResponse, PsuResponse } from './psu.dto';
import { IRamResponse, RamResponse } from './ram.dto';

export class ConfigurationResponse implements IConfigurationResponse {
    @ApiProperty({ example: 1 })
    @Expose()
    id: number;

    @ApiPropertyOptional({ type: () => CpuResponse })
    @Exclude()
    cpu: CpuResponse;

    @ApiPropertyOptional({ type: () => GpuResponse })
    @Exclude()
    gpu: GpuResponse;

    @ApiPropertyOptional({ type: () => MotherBoardResponse })
    @Exclude()
    motherboard: MotherBoardResponse;

    @ApiPropertyOptional({ type: () => PsuResponse })
    @Exclude()
    psu: PsuResponse;

    @ApiPropertyOptional({ type: () => RamResponse })
    @Exclude()
    ram: RamResponse;

    @ApiProperty({ example: 1000 })
    @Expose()
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
