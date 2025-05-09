import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IConfigurationResponse } from '../domain/dto/configuration.response';
import { ICpuResponse } from '../domain/dto/cpu.response';
import { IGpuResponse } from '../domain/dto/gpu.response';
import { IMotherBoardResponse } from '../domain/dto/motherboard.response';
import { IPsuResponse } from '../domain/dto/psu.response';
import { IRamResponse } from '../domain/dto/ram.response';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { IGetConfigurationResponse } from '../domain/dto/get-configurations.response';

@Injectable()
export class ConfiguratorRepository {
    constructor(
        private readonly prisma: PrismaClient,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    async getConfiguration(id: number): Promise<IConfigurationResponse> {
        return this.prisma.configuration.findUnique({
            where: {
                id: id,
            },
            include: {
                cpu: true,
                gpu: true,
                motherboard: true,
                psu: true,
                ram: true,
            },
        });
    }

    async saveConfiguration(
        configuration: IConfigurationResponse,
    ): Promise<IConfigurationResponse> {
        return this.prisma.configuration.create({
            data: {
                cpuId: configuration.cpu.id,
                gpuId: configuration.gpu.id,
                motherboardId: configuration.motherboard.id,
                psuId: configuration.psu.id,
                ramId: configuration.ram.id,
                price: configuration.price,
            },
            include: {
                cpu: true,
                gpu: true,
                motherboard: true,
                psu: true,
                ram: true,
            },
        });
    }

    async getAllConfiguration(limit: number, offset: number): Promise<IGetConfigurationResponse> {
        const configurations = await this.prisma.configuration.findMany({
            skip: offset,
            take: limit,
            include: {
                cpu: true,
                gpu: true,
                motherboard: true,
                psu: true,
                ram: true,
            },
        });

        const totalCount = await this.prisma.configuration.count();

        return {
            configurations: configurations,
            count: totalCount,
        };
    }

    async getAllCpus(): Promise<ICpuResponse[]> {
        return this.prisma.cpu.findMany();
    }

    async getAllGpus(): Promise<IGpuResponse[]> {
        return this.prisma.gpu.findMany();
    }

    async getAllMotherBoards(): Promise<IMotherBoardResponse[]> {
        return this.prisma.motherboard.findMany();
    }

    async getAllPsus(): Promise<IPsuResponse[]> {
        return this.prisma.psu.findMany();
    }

    async getAllRam(): Promise<IRamResponse[]> {
        return this.prisma.ram.findMany();
    }
}
