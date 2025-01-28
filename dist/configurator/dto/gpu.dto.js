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
exports.GpuResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class GpuResponse {
}
exports.GpuResponse = GpuResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GpuResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GpuResponse.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GpuResponse.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GpuResponse.prototype, "wattage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3.8 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], GpuResponse.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PCI-E4' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GpuResponse.prototype, "port", void 0);
//# sourceMappingURL=gpu.dto.js.map