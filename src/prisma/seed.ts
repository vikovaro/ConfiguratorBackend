import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await cleanDatabase();

    await prisma.cpu.createMany({
        data: [
            {
                id: 1,
                manufacturer: 'Intel',
                socket: 'LGA1700',
                name: 'Core i5-12400F',
                wattage: 65,
                frequency: 2.5,
                price: 18000,
            },
            {
                id: 2,
                manufacturer: 'Intel',
                socket: 'LGA1700',
                name: 'Core i7-12700K',
                wattage: 125,
                frequency: 3.6,
                price: 32000,
            },
            {
                id: 3,
                manufacturer: 'AMD',
                socket: 'AM5',
                name: 'Ryzen 5 7600X',
                wattage: 105,
                frequency: 4.7,
                price: 25000,
            },
            {
                id: 4,
                manufacturer: 'AMD',
                socket: 'AM4',
                name: 'Ryzen 7 5800X3D',
                wattage: 105,
                frequency: 3.4,
                price: 30000,
            },
            {
                id: 5,
                manufacturer: 'Intel',
                socket: 'LGA1200',
                name: 'Core i3-10100F',
                wattage: 65,
                frequency: 3.6,
                price: 8000,
            },
            {
                id: 6,
                manufacturer: 'Intel',
                socket: 'LGA1700',
                name: 'Core i9-13900K',
                wattage: 125,
                frequency: 3.0,
                price: 55000,
            },
            {
                id: 7,
                manufacturer: 'AMD',
                socket: 'AM5',
                name: 'Ryzen 9 7950X',
                wattage: 170,
                frequency: 4.5,
                price: 65000,
            },
            {
                id: 8,
                manufacturer: 'Intel',
                socket: 'LGA1700',
                name: 'Core i5-13600K',
                wattage: 125,
                frequency: 3.5,
                price: 28000,
            },
            {
                id: 9,
                manufacturer: 'AMD',
                socket: 'AM4',
                name: 'Ryzen 5 5600X',
                wattage: 65,
                frequency: 3.7,
                price: 17000,
            },
            {
                id: 10,
                manufacturer: 'Intel',
                socket: 'LGA1200',
                name: 'Core i5-11400F',
                wattage: 65,
                frequency: 2.6,
                price: 15000,
            },
            {
                id: 11,
                manufacturer: 'AMD',
                socket: 'AM5',
                name: 'Ryzen 7 7700X',
                wattage: 105,
                frequency: 4.5,
                price: 35000,
            },
            {
                id: 12,
                manufacturer: 'Intel',
                socket: 'LGA1700',
                name: 'Core i3-12100F',
                wattage: 58,
                frequency: 3.3,
                price: 10000,
            },
            {
                id: 13,
                manufacturer: 'AMD',
                socket: 'AM4',
                name: 'Ryzen 9 5900X',
                wattage: 105,
                frequency: 3.7,
                price: 38000,
            },
            {
                id: 14,
                manufacturer: 'Intel',
                socket: 'LGA2066',
                name: 'Core i9-10980XE',
                wattage: 165,
                frequency: 3.0,
                price: 70000,
            },
            {
                id: 15,
                manufacturer: 'AMD',
                socket: 'AM4',
                name: 'Ryzen 3 4100',
                wattage: 65,
                frequency: 3.8,
                price: 7000,
            },
        ],
    });

    await prisma.gpu.createMany({
        data: [
            {
                id: 1,
                frequency: 1.77,
                manufacturer: 'NVIDIA',
                name: 'RTX 3060',
                port: 'PCIe 4.0',
                wattage: 170,
                price: 35000,
            },
            {
                id: 2,
                frequency: 1.86,
                manufacturer: 'NVIDIA',
                name: 'RTX 4060 Ti',
                port: 'PCIe 4.0',
                wattage: 160,
                price: 45000,
            },
            {
                id: 3,
                frequency: 2.31,
                manufacturer: 'AMD',
                name: 'RX 7600',
                port: 'PCIe 4.0',
                wattage: 165,
                price: 30000,
            },
            {
                id: 4,
                frequency: 2.25,
                manufacturer: 'NVIDIA',
                name: 'RTX 4070',
                port: 'PCIe 4.0',
                wattage: 200,
                price: 60000,
            },
            {
                id: 5,
                frequency: 2.1,
                manufacturer: 'AMD',
                name: 'RX 6700 XT',
                port: 'PCIe 4.0',
                wattage: 230,
                price: 40000,
            },
            {
                id: 6,
                frequency: 2.52,
                manufacturer: 'NVIDIA',
                name: 'RTX 4090',
                port: 'PCIe 4.0',
                wattage: 450,
                price: 180000,
            },
            {
                id: 7,
                frequency: 2.3,
                manufacturer: 'AMD',
                name: 'RX 7900 XTX',
                port: 'PCIe 4.0',
                wattage: 355,
                price: 110000,
            },
            {
                id: 8,
                frequency: 1.73,
                manufacturer: 'NVIDIA',
                name: 'RTX 3050',
                port: 'PCIe 4.0',
                wattage: 130,
                price: 28000,
            },
            {
                id: 9,
                frequency: 2.0,
                manufacturer: 'AMD',
                name: 'RX 6600',
                port: 'PCIe 4.0',
                wattage: 132,
                price: 25000,
            },
            {
                id: 10,
                frequency: 2.04,
                manufacturer: 'NVIDIA',
                name: 'RTX 4070 Ti',
                port: 'PCIe 4.0',
                wattage: 285,
                price: 80000,
            },
            {
                id: 11,
                frequency: 2.1,
                manufacturer: 'Intel',
                name: 'Arc A750',
                port: 'PCIe 4.0',
                wattage: 225,
                price: 22000,
            },
            {
                id: 12,
                frequency: 2.4,
                manufacturer: 'Intel',
                name: 'Arc A770',
                port: 'PCIe 4.0',
                wattage: 225,
                price: 28000,
            },
            {
                id: 13,
                frequency: 1.82,
                manufacturer: 'NVIDIA',
                name: 'RTX 3080',
                port: 'PCIe 4.0',
                wattage: 320,
                price: 70000,
            },
            {
                id: 14,
                frequency: 2.0,
                manufacturer: 'AMD',
                name: 'RX 6800',
                port: 'PCIe 4.0',
                wattage: 250,
                price: 50000,
            },
            {
                id: 15,
                frequency: 1.67,
                manufacturer: 'NVIDIA',
                name: 'RTX 2060 Super',
                port: 'PCIe 3.0',
                wattage: 175,
                price: 30000,
            },
        ],
    });

    await prisma.motherboard.createMany({
        data: [
            {
                id: 1,
                manufacturer: 'ASUS',
                name: 'PRIME B660-PLUS',
                cpuManufacturer: 'Intel',
                socket: 'LGA1700',
                chipset: 'B660',
                port: 'PCIe 4.0',
                price: 12000,
            },
            {
                id: 2,
                manufacturer: 'Gigabyte',
                name: 'B650 AORUS ELITE',
                cpuManufacturer: 'AMD',
                socket: 'AM5',
                chipset: 'B650',
                port: 'PCIe 4.0',
                price: 18000,
            },
            {
                id: 3,
                manufacturer: 'MSI',
                name: 'MAG B550 TOMAHAWK',
                cpuManufacturer: 'AMD',
                socket: 'AM4',
                chipset: 'B550',
                port: 'PCIe 4.0',
                price: 15000,
            },
            {
                id: 4,
                manufacturer: 'ASRock',
                name: 'Z690 Phantom Gaming',
                cpuManufacturer: 'Intel',
                socket: 'LGA1700',
                chipset: 'Z690',
                port: 'PCIe 5.0',
                price: 22000,
            },
            {
                id: 5,
                manufacturer: 'ASUS',
                name: 'ROG STRIX H470-F',
                cpuManufacturer: 'Intel',
                socket: 'LGA1200',
                chipset: 'H470',
                port: 'PCIe 3.0',
                price: 10000,
            },
            {
                id: 6,
                manufacturer: 'MSI',
                name: 'MAG Z790 TOMAHAWK',
                cpuManufacturer: 'Intel',
                socket: 'LGA1700',
                chipset: 'Z790',
                port: 'PCIe 5.0',
                price: 25000,
            },
            {
                id: 7,
                manufacturer: 'ASUS',
                name: 'TUF GAMING X670E-PLUS',
                cpuManufacturer: 'AMD',
                socket: 'AM5',
                chipset: 'X670E',
                port: 'PCIe 5.0',
                price: 30000,
            },
            {
                id: 8,
                manufacturer: 'Gigabyte',
                name: 'B760M DS3H',
                cpuManufacturer: 'Intel',
                socket: 'LGA1700',
                chipset: 'B760',
                port: 'PCIe 4.0',
                price: 13000,
            },
            {
                id: 9,
                manufacturer: 'ASRock',
                name: 'B550M-HDV',
                cpuManufacturer: 'AMD',
                socket: 'AM4',
                chipset: 'B550',
                port: 'PCIe 3.0',
                price: 8000,
            },
            {
                id: 10,
                manufacturer: 'Biostar',
                name: 'B450MH',
                cpuManufacturer: 'AMD',
                socket: 'AM4',
                chipset: 'B450',
                port: 'PCIe 3.0',
                price: 6000,
            },
        ],
    });

    await prisma.psu.createMany({
        data: [
            {
                id: 1,
                manufacturer: 'Be Quiet!',
                name: 'Pure Power 11 600W',
                wattage: 600,
                price: 7000
            },
            {
                id: 2,
                manufacturer: 'Corsair',
                name: 'RM750x',
                wattage: 750,
                price: 12000
            },
            {
                id: 3,
                manufacturer: 'Seasonic',
                name: 'Focus GX-850',
                wattage: 850,
                price: 15000
            },
            {
                id: 4,
                manufacturer: 'AeroCool',
                name: 'LUX 550W',
                wattage: 550,
                price: 5000
            },
            {
                id: 5,
                manufacturer: 'Cooler Master',
                name: 'MWE Gold 650',
                wattage: 650,
                price: 8000
            },
            {
                id: 6,
                manufacturer: 'Thermaltake',
                name: 'Toughpower GF1 750W',
                wattage: 750,
                price: 11000
            },
            {
                id: 7,
                manufacturer: 'Chieftec',
                name: 'GDP-750C',
                wattage: 750,
                price: 9000
            },
            {
                id: 8,
                manufacturer: 'Deepcool',
                name: 'PQ750M',
                wattage: 750,
                price: 10000
            },
            {
                id: 9,
                manufacturer: 'FSP',
                name: 'Hydro G Pro 1000W',
                wattage: 1000,
                price: 18000
            },
            {
                id: 10,
                manufacturer: 'Zalman',
                name: 'EBT 500W',
                wattage: 500,
                price: 4500
            }
        ],
    });

    await prisma.ram.createMany({
        data: [
            {
                id: 1,
                manufacturer: 'Corsair',
                name: 'Vengeance LPX 32GB',
                capacity: 32,
                price: 9000,
            },
            { id: 2, manufacturer: 'Crucial', name: 'Ballistix 16GB', capacity: 16, price: 6000 },
            { id: 3, manufacturer: 'Patriot', name: 'Viper Steel 8GB', capacity: 8, price: 3000 },
        ],
    });

    console.log('Seed data created successfully!');
}

async function cleanDatabase() {
    await prisma.order.deleteMany();
    await prisma.configuration.deleteMany();
    await prisma.user.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();
    await prisma.cpu.deleteMany();
    await prisma.gpu.deleteMany();
    await prisma.motherboard.deleteMany();
    await prisma.psu.deleteMany();
    await prisma.ram.deleteMany();
}

main()
    .catch((e) => {
        console.error('Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
