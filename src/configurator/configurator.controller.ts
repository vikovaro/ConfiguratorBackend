import { Controller, Post, Body, SerializeOptions, HttpStatus, Get, Query } from '@nestjs/common';
import { ConfiguratorService } from './configurator.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigurationResponse } from './domain/dto/configuration.dto';
import { CreateConfigurationDto } from './domain/dto/create-configuration.dto';
import { GetConfigurationsDto } from './domain/dto/get-configurations.dto';
import { GetConfigurationsResponse } from './domain/dto/get-configurations.response';

@Controller('configurator')
@ApiTags('configurator')
export class ConfiguratorController {
    constructor(private readonly configuratorService: ConfiguratorService) {}

    @Post('/create')
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'create configuration',
        type: ConfigurationResponse,
    })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: ConfigurationResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async createConfiguration(@Body() createConfigurationDto: CreateConfigurationDto) {
        return await this.configuratorService.createConfiguration(createConfigurationDto);
    }

    @Get('/get')
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'get configuration',
        type: ConfigurationResponse,
    })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: ConfigurationResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async getConfiguration(@Query('id') id: number) {
        return await this.configuratorService.getConfigurationById(+id);
    }

    @Post('/all')
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'get all configurations with pagination',
        type: GetConfigurationsResponse,
    })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: GetConfigurationsResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async getAllConfigurations(@Body() getConfigurationsDto: GetConfigurationsDto) {
        return await this.configuratorService.getAllConfigurations(
            getConfigurationsDto.limit,
            getConfigurationsDto.offset,
        );
    }
}
