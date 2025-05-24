import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { SignUpRequest } from '../domain/dto/sign-up.request';
import { Request } from 'express';

interface RequestWithUser extends Request {
    data: {
        userId: string;
    };
}

describe('UserController', () => {
    let controller: UserController;

    const mockUserService = {
        getUserById: jest.fn(),
        signUp: jest.fn()
    };

    const mockRequest = {
        data: {
            userId: 'test-user-id'
        }
    } as RequestWithUser;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                {
                    provide: UserService,
                    useValue: mockUserService
                }
            ]
        }).compile();

        controller = module.get<UserController>(UserController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getMe', () => {
        it('should get current user information', async () => {
            const expectedResult = {
                id: 'test-user-id',
                email: 'test@example.com',
                username: 'testuser',
                role: 'USER',
                name: 'Test User',
                phone: '+1234567890',
                createdAt: new Date()
            };

            mockUserService.getUserById.mockResolvedValue(expectedResult);

            const result = await controller.getMe(mockRequest);

            expect(result).toEqual(expectedResult);
            expect(mockUserService.getUserById).toHaveBeenCalledWith(mockRequest.data.userId);
        });
    });

    describe('signUp', () => {
        it('should register a new user', async () => {
            const signUpDto: SignUpRequest = {
                email: 'test@example.com',
                password: 'password123',
                username: 'testuser',
                name: 'Test User',
                phone: '+1234567890'
            };

            const expectedResult = {
                accessToken: 'test-access-token',
                refreshToken: 'test-refresh-token'
            };

            mockUserService.signUp.mockResolvedValue(expectedResult);

            const result = await controller.signUp(signUpDto);

            expect(result).toEqual(expectedResult);
            expect(mockUserService.signUp).toHaveBeenCalledWith(signUpDto);
        });
    });
});