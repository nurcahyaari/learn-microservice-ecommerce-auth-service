import { ApiProperty } from '@nestjs/swagger';

export class UserRequestFromExternal {
  @ApiProperty()
  id: number;

  @ApiProperty()
  token_type: string;

  @ApiProperty()
  user: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  exp: number;
}

export class UserTokenRequestFromExternal {
  @ApiProperty()
  access_token: UserRequestFromExternal;

  @ApiProperty()
  refresh_token: UserRequestFromExternal;
}

export class GrantAccess {
  @ApiProperty()
  grant_access: boolean;
}
