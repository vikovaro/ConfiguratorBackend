import { Expose } from 'class-transformer';
import { IsEnum, IsInt, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ECpuVariants } from '../domain/cpu.type.enum';
import { EGpuVariants } from '../domain/gpu.type.enum';

export class CreateConfigurationDto {
    @ApiProperty({ example: 1000 })
    @IsInt()
    @Min(1)
    @Expose()
    price: number;

    @ApiProperty({ example: 'Intel' })
    @IsString()
    @IsEnum(ECpuVariants)
    @Expose()
    cpu?: string;

    @ApiProperty({ example: 'Nvidia' })
    @IsString()
    @IsEnum(EGpuVariants)
    @Expose()
    gpu?: string;

    @ApiProperty({ example: 1000 })
    @Expose()
    ram?: number;
}
