import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IUserResponse } from '../domain/dto/user.response';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async getUserById(id: string): Promise<IUserResponse> {
        return this.prisma.user.findUnique({
            where: { id: id },
        });
    }

    async getUserByUsername(username: string): Promise<IUserResponse> {
        return this.prisma.user.findUnique({
            where: { username: username },
        });
    }

    async getSessionByRefreshToken(refreshToken: string) {
        return this.prisma.session.findUnique({
            where: { refreshToken: refreshToken },
        });
    }

    async updateSession(userId: string, accessToken: string, refreshToken: string) {
        return this.prisma.session.upsert({
            where: {
                userId: userId,
            },
            update: {
                accessToken: accessToken,
                refreshToken: refreshToken,
                updatedAt: new Date(),
            },
            create: {
                accessToken: accessToken,
                refreshToken: refreshToken,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
    }
}
