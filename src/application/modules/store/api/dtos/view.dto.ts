import { RoleEnum } from '@/domain/common/enums/role';
import { IViewUserOutput } from '@/domain/user/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';

export class ViewUserDto implements IViewUserOutput {
  @ApiProperty({ example: true, description: 'Indica se o usuário está ativo' })
  isActive!: boolean;

  @ApiProperty({ example: 'd27448f7-c8de-4d1a-95d2-1edff1a47277', description: 'ID do usuário' })
  id!: string;

  @ApiProperty({ example: 'Jorge Gustavo', description: 'Nome do usuário' })
  name!: string;

  @ApiProperty({ example: 'jorge@email.com', description: 'E-mail do usuário' })
  email!: string;

  @ApiProperty({ example: RoleEnum.SELLER, enum: RoleEnum, description: 'Perfil do usuário' })
  role!: RoleEnum;

  @ApiProperty({ example: '34ad503d-2141-464f-847d-aa567df64586', description: 'ID do cliente (customer)' })
  customerId!: string;

  @ApiProperty({ example: '2025-05-18T14:34:00.000Z', description: 'Data de criação' })
  createdAt!: Date;

  @ApiProperty({ example: '2025-05-18T14:34:00.000Z', description: 'Data da última atualização' })
  updatedAt!: Date;

  @ApiProperty({ example: '2025-05-18T14:34:00.000Z', description: 'Data da última atualização', nullable: true })
  deletedAt!: Date | null;
}
