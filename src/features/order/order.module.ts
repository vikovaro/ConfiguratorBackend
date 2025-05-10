import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenService } from '../user/services/token.service';
import { UserRepository } from '../user/repositories/user.repository';
import { OrderRepository } from './repositories/order.repository';

@Module({
    controllers: [OrderController],
    providers: [OrderService, TokenService, UserRepository, OrderRepository],
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: '30m',
                },
                global: true,
            }),
        }),
    ],
})
export class OrderModule {}
