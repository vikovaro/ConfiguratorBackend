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
import { Tokens } from '../dto/tokens.dto';
import { UserService } from '../services/user.service';
import { AuthRestGuard } from '../../../guards/auth-rest.guard';
import { AuthRefreshRestGuard } from '../../../guards/auth-refresh.guad';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/me')
    @UseGuards(AuthRestGuard)
    // @ApiResponse({ status: HttpStatus.OK, description: 'getMe', type: User })
    // @SerializeOptions({
    //     strategy: 'exposeAll',
    //     type: User,
    //     excludeExtraneousValues: true,
    //     enableImplicitConversion: true,
    // })
    async getMe(@Req() req: Request) {
        return await this.userService.getUserById(req['data'].userId);
    }

    @Post('/login')
    async signIn(@Body() signInDto: Record<string, any>) {
        console.log(`test login signInDto:${JSON.stringify(signInDto)}`);
        const tokens = await this.userService.signIn(signInDto.username, signInDto.password);
        return tokens;
    }

    @Post('/refresh')
    @UseGuards(AuthRefreshRestGuard)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'getting a pair of the new JWT tokens (access & refresh)',
        type: Tokens,
    })
    @SerializeOptions({
        strategy: 'exposeAll',
        type: Tokens,
        excludeExtraneousValues: true,
        enableImplicitConversion: true,
    })
    async refreshToken(@Req() req: Request) {
        return await this.userService.refreshToken(req['data']);
    }
}
