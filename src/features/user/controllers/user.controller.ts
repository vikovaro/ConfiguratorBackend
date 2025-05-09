import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Post,
    Req,
    SerializeOptions,
    UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { TokensResponse } from '../domain/dto/tokens.response';
import { UserService } from '../services/user.service';
import { AuthRestGuard } from '../../../guards/auth-rest.guard';
import { AuthRefreshRestGuard } from '../../../guards/auth-refresh.guad';
import { UserResponse } from '../domain/dto/user.response';
import { SignInRequest } from '../domain/dto/sign-in.request';
import { SignUpRequest } from '../domain/dto/sign-up.request';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/me')
    @UseGuards(AuthRestGuard)
    @ApiResponse({ status: HttpStatus.OK, description: 'getMe', type: UserResponse })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: UserResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async getMe(@Req() req: Request) {
        return await this.userService.getUserById(req['data'].userId);
    }

    @Post('/register')
    @ApiResponse({ status: HttpStatus.OK, description: 'register', type: TokensResponse })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: TokensResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async signUp(@Body() signInDto: SignUpRequest) {
        console.log(`test register signUpDto:${JSON.stringify(signInDto)}`);
        const tokens = await this.userService.signUp(signInDto.username, signInDto.password);
        return tokens;
    }

    @Post('/login')
    @ApiResponse({ status: HttpStatus.OK, description: 'login', type: TokensResponse })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: TokensResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async signIn(@Body() signInDto: SignInRequest) {
        console.log(`test login signInDto:${JSON.stringify(signInDto)}`);
        const tokens = await this.userService.signIn(signInDto.username, signInDto.password);
        return tokens;
    }

    @Post('/refresh')
    @UseGuards(AuthRefreshRestGuard)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'getting a pair of the new JWT tokens (access & refresh)',
        type: TokensResponse,
    })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: TokensResponse,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async refreshToken(@Req() req: Request) {
        return await this.userService.refreshToken(req['data']);
    }
}
