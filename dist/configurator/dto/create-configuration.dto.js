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
exports.CreateConfigurationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const cpu_type_enum_1 = require("../domain/cpu.type.enum");
const gpu_type_enum_1 = require("../domain/gpu.type.enum");
class CreateConfigurationDto {
}
exports.CreateConfigurationDto = CreateConfigurationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateConfigurationDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intel' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(cpu_type_enum_1.ECpuVariants),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateConfigurationDto.prototype, "cpu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nvidia' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(gpu_type_enum_1.EGpuVariants),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateConfigurationDto.prototype, "gpu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateConfigurationDto.prototype, "ram", void 0);
//# sourceMappingURL=create-configuration.dto.js.map