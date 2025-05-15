import { Module } from '@nestjs/common';
import { ConfiguratorService } from './configurator.service';
import { ConfiguratorController } from './configurator.controller';
import { ConfiguratorRepository } from './configurator.repository';
import { PrismaClient } from '@prisma/client';
import { ExceptionsFilter } from './exception-filters/exception-filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
    controllers: [ConfiguratorController],
    providers: [
        ConfiguratorService,
        ConfiguratorRepository,
        PrismaClient,
        {
            provide: APP_FILTER,
            useClass: ExceptionsFilter,
        },
    ],
})
export class ConfiguratorModule {}
