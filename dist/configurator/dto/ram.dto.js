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
exports.RamResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class RamResponse {
}
exports.RamResponse = RamResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RamResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'rog' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RamResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RamResponse.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RamResponse.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RamResponse.prototype, "capacity", void 0);
//# sourceMappingURL=ram.dto.js.map