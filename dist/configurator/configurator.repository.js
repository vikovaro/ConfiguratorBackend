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
exports.ConfiguratorRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ConfiguratorRepository = class ConfiguratorRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getConfiguration(id) {
        return this.prisma.configuration.findUnique({
            where: {
                id: id,
            },
            include: {
                cpu: true,
                gpu: true,
                motherboard: true,
                psu: true,
                ram: true,
            },
        });
    }
    async saveConfiguration(configuration) {
        return this.prisma.configuration.create({
            data: {
                cpuId: configuration.cpu.id,
                gpuId: configuration.gpu.id,
                motherboardId: configuration.motherboard.id,
                psuId: configuration.psu.id,
                ramId: configuration.ram.id,
                price: configuration.price,
            },
            include: {
                cpu: true,
                gpu: true,
                motherboard: true,
                psu: true,
                ram: true,
            },
        });
    }
    async getAllConfiguration(limit, offset) {
        const configurations = await this.prisma.configuration.findMany({
            skip: offset,
            take: limit,
            include: {
                cpu: true,
                gpu: true,
                motherboard: true,
                psu: true,
                ram: true,
            },
        });
        const totalCount = await this.prisma.configuration.count();
        return {
            configurations: configurations,
            count: totalCount,
        };
    }
    async getAllCpus() {
        return this.prisma.cpu.findMany();
    }
    async getAllGpus() {
        return this.prisma.gpu.findMany();
    }
    async getAllMotherBoards() {
        return this.prisma.motherboard.findMany();
    }
    async getAllPsus() {
        return this.prisma.psu.findMany();
    }
    async getAllRam() {
        return this.prisma.ram.findMany();
    }
};
exports.ConfiguratorRepository = ConfiguratorRepository;
exports.ConfiguratorRepository = ConfiguratorRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], ConfiguratorRepository);
//# sourceMappingURL=configurator.repository.js.map