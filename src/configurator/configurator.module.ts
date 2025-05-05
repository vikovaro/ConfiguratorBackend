import { Module } from '@nestjs/common';
import { ConfiguratorService } from './configurator.service';
import { ConfiguratorController } from './configurator.controller';
import { ConfiguratorRepository } from './configurator.repository';
import { PrismaClient } from '@prisma/client';
import { ExceptionsFilter } from './interceptor/exception-filter';
import { APP_FILTER } from '@nestjs/core';
import { RedisCacheModule } from './cache/redis.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    controllers: [ConfiguratorController],
    providers: [
        ConfiguratorService,
        ConfiguratorRepository,
        PrismaClient,
        ConfigService,
        {
            provide: APP_FILTER,
            useClass: ExceptionsFilter,
        },
    ],
    imports: [
        RedisCacheModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
})
export class ConfiguratorModule {}
