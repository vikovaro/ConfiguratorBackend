"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguratorModule = void 0;
const common_1 = require("@nestjs/common");
const configurator_service_1 = require("./configurator.service");
const configurator_controller_1 = require("./configurator.controller");
const configurator_repository_1 = require("./configurator.repository");
const client_1 = require("@prisma/client");
const exception_filter_1 = require("./interceptor/exception-filter");
const core_1 = require("@nestjs/core");
let ConfiguratorModule = class ConfiguratorModule {
};
exports.ConfiguratorModule = ConfiguratorModule;
exports.ConfiguratorModule = ConfiguratorModule = __decorate([
    (0, common_1.Module)({
        controllers: [configurator_controller_1.ConfiguratorController],
        providers: [
            configurator_service_1.ConfiguratorService,
            configurator_repository_1.ConfiguratorRepository,
            client_1.PrismaClient,
            {
                provide: core_1.APP_FILTER,
                useClass: exception_filter_1.ExceptionsFilter,
            },
        ],
    })
], ConfiguratorModule);
//# sourceMappingURL=configurator.module.js.map