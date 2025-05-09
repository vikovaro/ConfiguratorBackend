import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ERole, TRole } from '../models/role.enum';

export class UserResponse implements IUserResponse {
    @ApiProperty({ example: '4da06a83-abf8-4f00-9423-fc06acd0f21d' })
    @Expose()
    id: string;

    @ApiProperty({ example: 'username' })
    @Expose()
    username: string;

    @ApiProperty()
    @Exclude()
    password: string;

    @ApiProperty({ enum: ERole })
    @Expose()
    role: ERole;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}

export interface IUserResponse {
    id: string;
    username: string;
    password: string;
    role: TRole;
    createdAt: Date;
}
