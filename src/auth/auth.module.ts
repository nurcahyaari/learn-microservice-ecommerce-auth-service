import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.ENCRYPTION_AUTH_KEY,
        };
      },
    }),
  ],
  providers: [AuthService, PassportModule, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
