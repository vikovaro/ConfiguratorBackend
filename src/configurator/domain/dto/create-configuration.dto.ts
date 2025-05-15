import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ECpuVariants } from '../models/cpu.type.enum';
import { EGpuVariants } from '../models/gpu.type.enum';

export class CreateConfigurationDto {
    @ApiProperty({ type: Number, example: 1000 })
    @IsInt()
    @Min(1)
    price: number;

    @ApiProperty({ enum: ECpuVariants, example: 'Intel' })
    @IsString()
    @IsOptional()
    @IsEnum(ECpuVariants)
    cpu?: string;

    @ApiProperty({ enum: EGpuVariants, example: 'Nvidia' })
    @IsString()
    @IsOptional()
    @IsEnum(EGpuVariants)
    gpu?: string;

    @ApiProperty({ type: Number, example: 1000 })
    @IsOptional()
    @IsInt()
    ram?: number;
}
