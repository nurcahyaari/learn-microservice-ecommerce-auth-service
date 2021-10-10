import { ApiProperty } from '@nestjs/swagger';

export class SystemUserEndpointAccess {
  @ApiProperty()
  url: string;

  @ApiProperty()
  access: boolean;
}

export class SystemUserRequestFromExternal {
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

  @ApiProperty()
  api_access: SystemUserEndpointAccess[];
}

export class SystemUserTokenRequestFromExternal {
  @ApiProperty()
  access_token: SystemUserRequestFromExternal;

  @ApiProperty()
  refresh_token: SystemUserRequestFromExternal;
}
