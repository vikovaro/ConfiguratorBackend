import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { APP_FILTER } from '@nestjs/core';
import { RedisCacheModule } from './configurator/cache/redis.module';
import { ConfiguratorModule } from './configurator/configurator.module';
import { ExceptionsFilter } from './configurator/interceptor/exception-filter';
import { PrismaExceptionFilter } from './configurator/exception-filters/prisma.exception.filter';
import { PrismaModule } from './configurator/prisma/prisma.module';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        RedisCacheModule,
        ConfiguratorModule,
        PrismaModule,
    ],
    providers: [
        ConfigService,
        PrismaClient,
        {
            provide: APP_FILTER,
            useClass: ExceptionsFilter,
        },
        {
            provide: APP_FILTER,
            useClass: PrismaExceptionFilter,
        },
    ],
    exports: [
        ConfigService,
        PrismaClient,
        RedisCacheModule,
    ],
})
export class GlobalModule {}
