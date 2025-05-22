import { ViewCustomerDto } from '@/application/modules/customer/api/dtos/view.dto';
import { IViewProductOutput } from '@/domain/product/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';
class ViewCategoryDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único da categoria' })
  id!: string;

  @ApiProperty({ example: 'Eletrônicos', description: 'Nome da categoria' })
  name!: string;
}

export class ViewProductDto implements IViewProductOutput {
  @ApiProperty({ type: () => ViewCustomerDto, description: 'Cliente do produto' })
  customer!: ViewCustomerDto;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID da categoria' })
  categoryId!: string;

  @ApiProperty({ type: () => ViewCategoryDto, description: 'Categoria do produto' })
  category!: ViewCategoryDto;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único do produto' })
  id!: string;

  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do produto' })
  name!: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID do cliente' })
  customerId!: string;

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
