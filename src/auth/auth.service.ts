import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtResponseGenerator } from './dto/jwt_generator.dto';
import { UserTokenRequestFromExternal } from './dto/user.dto';
import { SystemUserTokenRequestFromExternal } from './dto/system_user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  JwtGenerator(
    data: UserTokenRequestFromExternal | SystemUserTokenRequestFromExternal,
  ): JwtResponseGenerator {
    const jwtResponse: JwtResponseGenerator = {
      access_token: this.jwtService.sign(data.access_token),
      refresh_token: this.jwtService.sign(data.refresh_token),
    };
    return jwtResponse;
  }
}
