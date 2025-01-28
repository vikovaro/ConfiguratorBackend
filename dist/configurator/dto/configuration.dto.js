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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const cpu_dto_1 = require("./cpu.dto");
const gpu_dto_1 = require("./gpu.dto");
const motherboard_dto_1 = require("./motherboard.dto");
const psu_dto_1 = require("./psu.dto");
const ram_dto_1 = require("./ram.dto");
class ConfigurationResponse {
}
exports.ConfigurationResponse = ConfigurationResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ConfigurationResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => cpu_dto_1.CpuResponse }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", cpu_dto_1.CpuResponse)
], ConfigurationResponse.prototype, "cpu", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => gpu_dto_1.GpuResponse }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", gpu_dto_1.GpuResponse)
], ConfigurationResponse.prototype, "gpu", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => motherboard_dto_1.MotherBoardResponse }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", motherboard_dto_1.MotherBoardResponse)
], ConfigurationResponse.prototype, "motherboard", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => psu_dto_1.PsuResponse }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", psu_dto_1.PsuResponse)
], ConfigurationResponse.prototype, "psu", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => ram_dto_1.RamResponse }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", ram_dto_1.RamResponse)
], ConfigurationResponse.prototype, "ram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ConfigurationResponse.prototype, "price", void 0);
//# sourceMappingURL=configuration.dto.js.map