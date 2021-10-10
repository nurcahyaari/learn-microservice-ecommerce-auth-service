import { ApiProperty } from '@nestjs/swagger';

export class AuthParams {
  @ApiProperty()
  user_type: string;
}
