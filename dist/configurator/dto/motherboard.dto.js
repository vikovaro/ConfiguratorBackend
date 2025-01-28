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
exports.MotherBoardResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class MotherBoardResponse {
}
exports.MotherBoardResponse = MotherBoardResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MotherBoardResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ASUS ROG' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotherBoardResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotherBoardResponse.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MotherBoardResponse.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AM4' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotherBoardResponse.prototype, "socket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A320' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotherBoardResponse.prototype, "chipset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AMD' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], MotherBoardResponse.prototype, "cpuManufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PCI-E3' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotherBoardResponse.prototype, "port", void 0);
//# sourceMappingURL=motherboard.dto.js.map