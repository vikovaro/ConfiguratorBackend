"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguratorController = void 0;
const common_1 = require("@nestjs/common");
const configurator_service_1 = require("./configurator.service");
const swagger_1 = require("@nestjs/swagger");
const configuration_dto_1 = require("./dto/configuration.dto");
const create_configuration_dto_1 = require("./dto/create-configuration.dto");
const get_configurations_dto_1 = require("./dto/get-configurations.dto");
const get_configurations_response_1 = require("./dto/get-configurations.response");
let ConfiguratorController = class ConfiguratorController {
    constructor(configuratorService) {
        this.configuratorService = configuratorService;
    }
    async createConfiguration(createConfigurationDto) {
        return await this.configuratorService.createConfiguration(createConfigurationDto);
    }
    async getConfiguration(id) {
        return await this.configuratorService.getConfigurationById(+id);
    }
    async getAllConfigurations(getConfigurationsDto) {
        return await this.configuratorService.getAllConfigurations(getConfigurationsDto.limit, getConfigurationsDto.offset);
    }
};
exports.ConfiguratorController = ConfiguratorController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'create configuration',
        type: configuration_dto_1.ConfigurationResponse,
    }),
    (0, common_1.SerializeOptions)({
        strategy: 'exposeAll',
        type: configuration_dto_1.ConfigurationResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_configuration_dto_1.CreateConfigurationDto]),
    __metadata("design:returntype", Promise)
], ConfiguratorController.prototype, "createConfiguration", null);
__decorate([
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'get configuration',
        type: configuration_dto_1.ConfigurationResponse,
    }),
    (0, common_1.SerializeOptions)({
        strategy: 'exposeAll',
        type: configuration_dto_1.ConfigurationResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConfiguratorController.prototype, "getConfiguration", null);
__decorate([
    (0, common_1.Post)('/all'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'get all configurations with pagination',
        type: get_configurations_response_1.GetConfigurationsResponse,
    }),
    (0, common_1.SerializeOptions)({
        strategy: 'exposeAll',
        type: get_configurations_response_1.GetConfigurationsResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_configurations_dto_1.GetConfigurationsDto]),
    __metadata("design:returntype", Promise)
], ConfiguratorController.prototype, "getAllConfigurations", null);
exports.ConfiguratorController = ConfiguratorController = __decorate([
    (0, common_1.Controller)('configurator'),
    (0, swagger_1.ApiTags)('configurator'),
    __metadata("design:paramtypes", [configurator_service_1.ConfiguratorService])
], ConfiguratorController);
//# sourceMappingURL=configurator.controller.js.map