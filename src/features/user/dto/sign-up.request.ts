import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpRequest implements ISignUpRequest {
    @ApiProperty({ example: 'username' })
    @Expose()
    username: string;

    @ApiProperty({ example: 'password' })
    @Expose()
    password: string;
}

export interface ISignUpRequest {
    username: string;
    password: string;
}
