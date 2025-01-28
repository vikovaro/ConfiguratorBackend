import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SeedService {
    constructor(private readonly prisma: PrismaClient) {}

    async create() {
        await this.clean();
        await this.createItems();
    }

    async clean() {
        await this.prisma.cpu.deleteMany();
        await this.prisma.gpu.deleteMany();
        await this.prisma.motherboard.deleteMany();
        await this.prisma.psu.deleteMany();
        await this.prisma.ram.deleteMany();
        await this.prisma.configuration.deleteMany();
    }

    async createItems() {
        const cpus = [
            { manufacturer: "Intel", socket: "LGA1200", name: "Intel Core i3-10100", wattage: 65, frequency: 3.6, price: 9000 },
            { manufacturer: "Intel", socket: "LGA1200", name: "Intel Core i5-10400", wattage: 65, frequency: 2.9, price: 15000 },
            { manufacturer: "Intel", socket: "LGA1200", name: "Intel Core i7-10700", wattage: 65, frequency: 2.9, price: 25000 },
            { manufacturer: "Intel", socket: "LGA1200", name: "Intel Core i9-10900", wattage: 65, frequency: 2.8, price: 40000 },
            { manufacturer: "Intel", socket: "LGA1700", name: "Intel Core i5-12600K", wattage: 125, frequency: 3.7, price: 30000 },
            { manufacturer: "AMD", socket: "AM4", name: "AMD Ryzen 3 3300X", wattage: 65, frequency: 3.8, price: 10000 },
            { manufacturer: "AMD", socket: "AM4", name: "AMD Ryzen 5 3600", wattage: 65, frequency: 3.6, price: 18000 },
            { manufacturer: "AMD", socket: "AM4", name: "AMD Ryzen 7 3700X", wattage: 65, frequency: 3.6, price: 28000 },
            { manufacturer: "AMD", socket: "AM4", name: "AMD Ryzen 9 3900X", wattage: 105, frequency: 3.8, price: 45000 },
            { manufacturer: "AMD", socket: "AM4", name: "AMD Ryzen 5 5600X", wattage: 65, frequency: 3.7, price: 22000 },
        ];

        const gpus = [
            { manufacturer: "Nvidia", frequency: 1.5, name: "Nvidia GTX 1650", port: "PCIe x16", wattage: 75, price: 20000 },
            { manufacturer: "Nvidia", frequency: 1.7, name: "Nvidia RTX 2060", port: "PCIe x16", wattage: 160, price: 35000 },
            { manufacturer: "Nvidia", frequency: 1.8, name: "Nvidia RTX 3060", port: "PCIe x16", wattage: 170, price: 40000 },
            { manufacturer: "Nvidia", frequency: 1.8, name: "Nvidia RTX 3070", port: "PCIe x16", wattage: 220, price: 60000 },
            { manufacturer: "Nvidia", frequency: 1.9, name: "Nvidia RTX 3080", port: "PCIe x16", wattage: 320, price: 80000 },
            { manufacturer: "Nvidia", frequency: 1.9, name: "Nvidia RTX 3090", port: "PCIe x16", wattage: 350, price: 120000 },
            { manufacturer: "Nvidia", frequency: 1.4, name: "Nvidia GT 1030", port: "PCIe x16", wattage: 30, price: 10000 },
            { manufacturer: "AMD", frequency: 1.6, name: "AMD Radeon RX 580", port: "PCIe x16", wattage: 185, price: 25000 },
            { manufacturer: "AMD", frequency: 1.8, name: "AMD Radeon RX 5700 XT", port: "PCIe x16", wattage: 225, price: 50000 },
            { manufacturer: "AMD", frequency: 2.0, name: "AMD Radeon RX 6700 XT", port: "PCIe x16", wattage: 230, price: 55000 },
            { manufacturer: "AMD", frequency: 2.1, name: "AMD Radeon RX 6800", port: "PCIe x16", wattage: 250, price: 70000 },
            { manufacturer: "AMD", frequency: 2.2, name: "AMD Radeon RX 6900 XT", port: "PCIe x16", wattage: 300, price: 90000 },
            { manufacturer: "Intel", frequency: 1.2, name: "Intel Arc A380", port: "PCIe x16", wattage: 75, price: 15000 },
            { manufacturer: "Intel", frequency: 1.5, name: "Intel Arc A750", port: "PCIe x16", wattage: 225, price: 30000 },
            { manufacturer: "Intel", frequency: 1.6, name: "Intel Arc A770", port: "PCIe x16", wattage: 250, price: 40000 },
        ];

        const motherboards = [
            { manufacturer: "ASUS", cpuManufacturer: "Intel", socket: "LGA1200", chipset: "B460", port: "PCIe x16", name: "ASUS PRIME B460-PLUS", price: 10000 },
            { manufacturer: "ASUS", cpuManufacturer: "Intel", socket: "LGA1700", chipset: "Z690", port: "PCIe x16", name: "ASUS ROG Strix Z690-E", price: 25000 },
            { manufacturer: "ASUS", cpuManufacturer: "AMD", socket: "AM4", chipset: "X570", port: "PCIe x16", name: "ASUS TUF Gaming X570-PLUS", price: 18000 },
            { manufacturer: "Gigabyte", cpuManufacturer: "Intel", socket: "LGA1200", chipset: "B560", port: "PCIe x16", name: "Gigabyte B560M AORUS PRO", price: 12000 },
            { manufacturer: "Gigabyte", cpuManufacturer: "AMD", socket: "AM4", chipset: "B550", port: "PCIe x16", name: "Gigabyte B550 AORUS ELITE", price: 12000 },
            { manufacturer: "Gigabyte", cpuManufacturer: "Intel", socket: "LGA1700", chipset: "Z790", port: "PCIe x16", name: "Gigabyte Z790 AORUS MASTER", price: 30000 },
            { manufacturer: "MSI", cpuManufacturer: "Intel", socket: "LGA1200", chipset: "H510", port: "PCIe x16", name: "MSI H510M-A PRO", price: 8000 },
            { manufacturer: "MSI", cpuManufacturer: "Intel", socket: "LGA1700", chipset: "Z690", port: "PCIe x16", name: "MSI PRO Z690-A", price: 18000 },
            { manufacturer: "MSI", cpuManufacturer: "AMD", socket: "AM4", chipset: "B450", port: "PCIe x16", name: "MSI B450 TOMAHAWK MAX", price: 10000 },
            { manufacturer: "ASRock", cpuManufacturer: "Intel", socket: "LGA1200", chipset: "H470", port: "PCIe x16", name: "ASRock H470 Steel Legend", price: 11000 },
            { manufacturer: "ASRock", cpuManufacturer: "AMD", socket: "AM4", chipset: "X570", port: "PCIe x16", name: "ASRock X570 Phantom Gaming 4", price: 15000 },
            { manufacturer: "ASRock", cpuManufacturer: "Intel", socket: "LGA1700", chipset: "Z690", port: "PCIe x16", name: "ASRock Z690 Extreme", price: 20000 },
            { manufacturer: "Biostar", cpuManufacturer: "Intel", socket: "LGA1200", chipset: "H410", port: "PCIe x16", name: "Biostar H410MH", price: 7000 },
            { manufacturer: "Biostar", cpuManufacturer: "AMD", socket: "AM4", chipset: "A520", port: "PCIe x16", name: "Biostar A520MH", price: 6000 },
            { manufacturer: "Biostar", cpuManufacturer: "Intel", socket: "LGA1700", chipset: "B660", port: "PCIe x16", name: "Biostar B660GTN", price: 9000 },
        ];

        const psus = [
            { manufacturer: "Corsair", name: "Corsair CV450", wattage: 450, price: 4000 },
            { manufacturer: "Seasonic", name: "Seasonic S12III 500", wattage: 500, price: 4500 },
            { manufacturer: "EVGA", name: "EVGA 600 W1", wattage: 600, price: 5000 },
            { manufacturer: "Thermaltake", name: "Thermaltake Smart 700W", wattage: 700, price: 6000 },
            { manufacturer: "Be Quiet!", name: "Be Quiet! Pure Power 11 400W", wattage: 400, price: 5500 },
        ];

        const rams = [
            { manufacturer: "Corsair", name: "Corsair Vengeance LPX 8GB", capacity: 8, price: 3000 },
            { manufacturer: "G.Skill", name: "G.Skill Ripjaws V 16GB", capacity: 16, price: 6000 },
            { manufacturer: "Kingston", name: "Kingston HyperX Fury 32GB", capacity: 32, price: 12000 },
        ];

        await this.prisma.cpu.createMany({ data: cpus });
        await this.prisma.gpu.createMany({ data: gpus });
        await this.prisma.motherboard.createMany({ data: motherboards });
        await this.prisma.psu.createMany({ data: psus });
        await this.prisma.ram.createMany({ data: rams });

        console.log('Seed data created successfully!');
    }
}