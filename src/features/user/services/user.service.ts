import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { TokenService } from './token.service';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly tokenService: TokenService,
    ) {}

    async getUserById(id: string) {
        const user = await this.userRepository.getUserById(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async signIn(login: string, password: string) {
        const user = await this.userRepository.getUserByLogin(login);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const tokens = await this.tokenService.generateToken(user.id, password);

        await this.userRepository.updateSession(user.id, tokens.accessToken, tokens.refreshToken);

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        };
    }

    async refreshToken(refreshToken: string) {
        const session = await this.userRepository.getSessionByRefreshToken(refreshToken);
        if (!session) {
            throw new UnauthorizedException();
        }

        const user = await this.userRepository.getUserById(session.userId);

        const tokens = await this.tokenService.generateToken(user.id, user.role);

        await this.userRepository.updateSession(user.id, tokens.accessToken, tokens.refreshToken);

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        };
    }
}
