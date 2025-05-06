import { Module } from '@nestjs/common';
import { ConfiguratorService } from './configurator.service';
import { ConfiguratorController } from './configurator.controller';
import { ConfiguratorRepository } from './configurator.repository';

@Module({
    controllers: [ConfiguratorController],
    providers: [ConfiguratorService, ConfiguratorRepository],
})
export class ConfiguratorModule {}
