import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserRequest implements IUpdateUserRequest {
    @ApiProperty({ example: 'username' })
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(30)
    username: string;

    @ApiProperty({ example: 'name' })
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(40)
    name?: string;

    @ApiProperty({ example: '+71112223344' })
    @IsString()
    @IsOptional()
    @MinLength(10)
    @MaxLength(15)
    phone?: string;

    @ApiProperty({ example: 'example@gmail.com' })
    @IsString()
    @IsOptional()
    @MinLength(10)
    @MaxLength(50)
    email?: string;

    @ApiProperty({ example: 'password' })
    @IsString()
    @IsOptional()
    @MinLength(8)
    @MaxLength(50)
    password?: string;
}

export interface IUpdateUserRequest {
    login?: string;
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
}
