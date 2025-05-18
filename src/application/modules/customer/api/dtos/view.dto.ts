import { IViewCustomerOutput } from '@/domain/customer/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';

export class ViewCustomerDto implements IViewCustomerOutput {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único do cliente' })
  id!: string;

  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do cliente' })
  name!: string;

  @ApiProperty({ example: '2024-04-01T12:00:00Z', description: 'Data de criação' })
  createdAt!: Date;

  @ApiProperty({ example: '2024-05-01T12:00:00Z', description: 'Data da última atualização' })
  updatedAt!: Date;

  @ApiProperty({
    example: null,
    description: 'Data da exclusão (soft delete), ou null se não excluído',
    nullable: true,
  })
  deletedAt!: Date | null;
}
