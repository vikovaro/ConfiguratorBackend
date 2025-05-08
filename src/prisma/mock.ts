import { PrismaClient, Status } from '@prisma/client';
import { Role } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function main() {
    await prisma.user.createMany({
        data: [
            {
                id: '550e8400-e29b-41d4-a716-446655440000',
                username: 'admin',
                password: await hash('admin123', SALT_ROUNDS),
                role: Role.Admin,
            },
            {
                id: '550e8400-e29b-41d4-a716-446655440001',
                username: 'user',
                password: await hash('user123', SALT_ROUNDS),
                role: Role.User,
            },
        ],
    });

    await prisma.configuration.createMany({
        data: [
            {
                id: 1,
                cpuId: 1,
                gpuId: 1,
                motherboardId: 1,
                psuId: 1,
                ramId: 1,
                price: 18000 + 35000 + 12000 + 7000 + 9000,
            },
            {
                id: 2,
                cpuId: 2,
                gpuId: 2,
                motherboardId: 4,
                psuId: 2,
                ramId: 1,
                price: 32000 + 45000 + 22000 + 12000 + 9000,
            },
            {
                id: 3,
                cpuId: 3,
                gpuId: 3,
                motherboardId: 2,
                psuId: 3,
                ramId: 2,
                price: 25000 + 30000 + 18000 + 15000 + 6000,
            },
            {
                id: 4,
                cpuId: 5,
                gpuId: 5,
                motherboardId: 5,
                psuId: 4,
                ramId: 3,
                price: 8000 + 40000 + 10000 + 5000 + 3000,
            },
        ],
    });

    await prisma.order.createMany({
        data: [
            {
                orderNumber: 'A0001',
                orderDate: new Date('2023-01-15'),
                deliveryDate: new Date('2023-01-20'),
                clientName: 'Иван Иванов',
                clientPhone: '+79123456789',
                carNumber: 'А123БВ777',
                configurationId: 1,
                userId: '550e8400-e29b-41d4-a716-446655440000',
                status: Status.Pending,
            },
            {
                orderNumber: 'A0002',
                orderDate: new Date('2023-02-10'),
                deliveryDate: new Date('2023-02-15'),
                clientName: 'Петр Петров',
                clientPhone: '+79234567890',
                configurationId: 2,
                userId: '550e8400-e29b-41d4-a716-446655440001',
                status: Status.Accepted,
            },
            {
                orderNumber: 'A0003',
                orderDate: new Date('2023-03-05'),
                clientName: 'Сергей Сергеев',
                clientPhone: '+79345678901',
                carNumber: 'В456ГД123',
                configurationId: 3,
                userId: '550e8400-e29b-41d4-a716-446655440000',
                status: Status.Canceled,
            },
        ],
    });

    console.log('Mock data seeded successfully!');
}

main()
    .catch((e) => {
        console.error('Mock seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
