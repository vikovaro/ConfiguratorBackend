import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from '../services/order.service';
import { CreateOrderRequest } from '../domain/dto/create.order.request';
import { UpdateOrderRequest } from '../domain/dto/update.order.request';
import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { EStatus } from '../domain/models/status.enum';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../user/repositories/user.repository';

interface RequestWithUser extends Request {
    data: {
        userId: string;
    };
}

describe('OrderController', () => {
    let controller: OrderController;

    const mockOrderService = {
        getOrder: jest.fn(),
        createOrder: jest.fn(),
        updateOrder: jest.fn(),
    };

    const mockUserRepository = {
        getUserById: jest.fn(),
    };

    const mockJwtService = {
        verifyAsync: jest.fn(),
    };

    const mockRequest = {
        data: {
            userId: 'test-user-id',
        },
    } as RequestWithUser;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OrderController],
            providers: [
                {
                    provide: OrderService,
                    useValue: mockOrderService,
                },
                {
                    provide: UserRepository,
                    useValue: mockUserRepository,
                },
                {
                    provide: JwtService,
                    useValue: mockJwtService,
                },
            ],
        }).compile();

        controller = module.get<OrderController>(OrderController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getOrder', () => {
        it('should get an order by id', async () => {
            const orderId = 1;
            const expectedResult = {
                id: orderId,
                orderDate: new Date(),
                deliveryDate: new Date(),
                address: 'Test Address',
                status: EStatus.Pending,
                userId: 'test-user-id',
                configurationId: 1,
            };

            mockOrderService.getOrder.mockResolvedValue(expectedResult);

            const result = await controller.getOrder(mockRequest, orderId);

            expect(result).toEqual(expectedResult);
            expect(mockOrderService.getOrder).toHaveBeenCalledWith(
                orderId,
                mockRequest.data.userId,
            );
        });

        it('should throw UnauthorizedException when user is not authorized', async () => {
            const orderId = 1;

            mockOrderService.getOrder.mockRejectedValue(new UnauthorizedException());

            await expect(controller.getOrder(mockRequest, orderId)).rejects.toThrow(
                UnauthorizedException,
            );
        });
    });

    describe('createOrder', () => {
        it('should create an order', async () => {
            const createOrderDto: CreateOrderRequest = {
                address: 'Test Address',
                configurationId: 1,
            };

            const expectedResult = {
                id: 1,
                orderDate: new Date(),
                deliveryDate: null,
                address: createOrderDto.address,
                status: EStatus.Pending,
                userId: mockRequest.data.userId,
                configurationId: createOrderDto.configurationId,
            };

            mockOrderService.createOrder.mockResolvedValue(expectedResult);

            const result = await controller.createOrder(mockRequest, createOrderDto);

            expect(result).toEqual(expectedResult);
            expect(mockOrderService.createOrder).toHaveBeenCalledWith(
                createOrderDto,
                mockRequest.data.userId,
            );
        });
    });

    describe('updateOrder', () => {
        it('should update an order', async () => {
            const updateOrderDto: UpdateOrderRequest = {
                orderId: 1,
                status: EStatus.Completed,
                deliveryDate: new Date(),
            };

            const expectedResult = {
                id: updateOrderDto.orderId,
                orderDate: new Date(),
                deliveryDate: updateOrderDto.deliveryDate,
                address: 'Test Address',
                status: updateOrderDto.status,
                userId: 'test-user-id',
                configurationId: 1,
            };

            mockOrderService.updateOrder.mockResolvedValue(expectedResult);

            const result = await controller.updateOrder(updateOrderDto);

            expect(result).toEqual(expectedResult);
            expect(mockOrderService.updateOrder).toHaveBeenCalledWith(updateOrderDto);
        });
    });
});