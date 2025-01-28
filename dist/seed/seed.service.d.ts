import { PrismaClient } from '@prisma/client';
export declare class SeedService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    create(): Promise<void>;
    clean(): Promise<void>;
    createItems(): Promise<void>;
}
