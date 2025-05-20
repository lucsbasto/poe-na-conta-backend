import { IViewSaleEntryOutput } from '@/domain/sale-entry/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';

export class ViewSaleEntryOutputDto implements IViewSaleEntryOutput {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único da venda' })
  id!: string;

  @ApiProperty({ example: '2024-05-01T12:00:00Z', description: 'Data da última atualização' })
  date!: Date;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único da loja' })
  storeId!: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único do produto' })
  productId!: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único do usuário' })
  createdBy!: string;

  @ApiProperty({ example: 10, description: 'Quantidade vendida' })
  quantitySold!: number;

  @ApiProperty({ example: 5, description: 'Quantidade não vendida' })
  quantityUnsold!: number;

  @ApiProperty({ example: 100, description: 'Custo unitário' })
  unitCost!: number;

  @ApiProperty({ example: 15, description: 'Quantidade enviada para a loja' })
  quantitySentToStore!: number;

  @ApiProperty({ example: 150, description: 'Preço de venda' })
  salePrice!: number;

  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do cliente' })
  customerName!: string;

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
