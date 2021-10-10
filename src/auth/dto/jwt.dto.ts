import { ApiProperty } from '@nestjs/swagger';

export class JwtAccessToken {
  @ApiProperty()
  access_token: string;
}

export class JwtRefreshToken {
  @ApiProperty()
  refresh_token: string;
}
