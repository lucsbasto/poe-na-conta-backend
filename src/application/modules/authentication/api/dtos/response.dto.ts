import { ISignInOutput } from '@/domain/authentication/interfaces/dtos';
import { RoleEnum } from '@/domain/common/enums/role';
import { ApiProperty } from '@nestjs/swagger';

class UserDto {
  @ApiProperty({ example: '1e9dfb8a-7152-4104-83ac-7723cc8ef258' })
  id!: string;

  @ApiProperty({ example: 'lucas@example.com' })
  email!: string;

  @ApiProperty({ example: 'Lucas Teste' })
  name!: string;

  @ApiProperty({ enum: RoleEnum, example: RoleEnum.ADMIN })
  role!: RoleEnum;

  @ApiProperty({ example: 'abc123' })
  customerId!: string;
}

export class SignInResponseDto implements ISignInOutput {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTlkZmI4YS03MTUyLTQxMDQtODNhYy03NzIzY2M4ZWY3MjUiLCJlbWFpbCI6ImFkbWluQG1pbmVpcm8uY29tIiwibmFtZSI6IkFkbWluIiwicm9sZSI6IkFETUlOIiwiY3VzdG9tZXJJZCI6ImM0ZjQ2YzQwLTFkNzUtNGJiYy04OTJmLTBiZjI4ZGVhZmZmZSIsImlhdCI6MTc0NzY5Nzg5OCwiZXhwIjoxNzUwMjg5ODk4fQ.tuP1uRcABylfrTNwX7bwQ5gAp6rIpwpzoPdsDRx5Wos"',
    description: 'Token de acesso do usuário',
  })
  token!: string;

  @ApiProperty({ example: '30d', description: 'Tempo de expiração do token em segundos' })
  expiresIn!: string;

  @ApiProperty({ type: UserDto, description: 'Informações do usuário' })
  user!: UserDto;
}
