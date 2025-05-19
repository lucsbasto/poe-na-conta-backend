import { Role } from '@/domain/common/enums/role';
import { IFilterUserInput } from '@/domain/user/interfaces/dtos/filter.input';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

export class FilterUserDto implements IFilterUserInput {
  @ApiPropertyOptional({ example: 'jorge', description: 'Filtrar por nome do usuário' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'jorge@email.com', description: 'Filtrar por e-mail do usuário' })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ example: Role.SELLER, enum: Role, description: 'Filtrar por perfil do usuário' })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ApiPropertyOptional({
    example: '34ad503d-2141-464f-847d-aa567df64586',
    description: 'Filtrar por ID do cliente (customer)',
  })
  @IsOptional()
  @IsUUID()
  customerId?: string;
}
