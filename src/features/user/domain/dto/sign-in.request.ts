import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SignInRequest implements ISignInRequest {
    @ApiProperty({ example: 'username' })
    @Expose()
    username: string;

    @ApiProperty({ example: 'password' })
    @Expose()
    password: string;
}

export interface ISignInRequest {
    username: string;
    password: string;
}
