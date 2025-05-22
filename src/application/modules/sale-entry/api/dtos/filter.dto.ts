import { IFilterSaleEntryInput } from '@/domain/sale-entry/interfaces/dtos/filter.input';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class FilterSaleEntryDto implements IFilterSaleEntryInput {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID único da entrada de venda',
    nullable: true,
  })
  @IsOptional()
  @IsUUID()
  id!: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID do produto', nullable: true })
  @IsOptional()
  @IsUUID()
  productId?: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID do usuário', nullable: true })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID da loja', nullable: true })
  @IsOptional()
  @IsUUID()
  storeId?: string;

  @ApiProperty({ example: 10, description: 'Quantidade vendida', nullable: true })
  @IsOptional()
  quantitySold?: number;

  @ApiProperty({ example: 5, description: 'Quantidade não vendida', nullable: true })
  @IsOptional()
  quantityUnsold?: number;

  @ApiProperty({ example: 15, description: 'Quantidade enviada para a loja', nullable: true })
  @IsOptional()
  quantitySentToStore?: number;

  @ApiProperty({ example: 4.5, description: 'Custo unitário', nullable: true })
  @IsOptional()
  unitCost?: number;

  @ApiProperty({ example: 7.5, description: 'Preço unitário', nullable: true })
  @IsOptional()
  unitPrice?: number;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID do cliente', nullable: true })
  @IsOptional()
  @IsUUID()
  customerId?: string;
}
