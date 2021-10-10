import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserTokenRequestFromExternal } from './dto/user.dto';
import { SystemUserTokenRequestFromExternal } from './dto/system_user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtUserAuthGuard } from './jwt-user.auth';
import { JwtSystemUserAuthGuard } from './jwt-system_user.auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('jwt/generator/user')
  GenerateJwkForUser(@Body() body: UserTokenRequestFromExternal) {
    console.log('Body:');
    console.table(body);
    return this.authService.JwtGenerator(body);
  }

  @Post('jwt/generator/admin')
  GenerateJwtForAdmin(@Body() body: SystemUserTokenRequestFromExternal) {
    console.log('Body:');
    console.table(body);
    return this.authService.JwtGenerator(body);
  }

  @ApiBearerAuth('Authorization')
  @UseGuards(JwtUserAuthGuard)
  @Get('jwt/user/access_token')
  CheckAuthenticationForUser(@Request() request) {
    return request.user;
  }

  @ApiBearerAuth('Authorization')
  @UseGuards(JwtSystemUserAuthGuard)
  @Get('jwt/system_user/access_token')
  CheckAuthenticationForSystemUser(@Request() request) {
    return request.user;
  }
}
