import { IFilterProductInput } from '@/domain/product/interfaces/dtos/filter.output';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class FilterProductDto implements IFilterProductInput {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único do produto', nullable: true })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do produto', nullable: true })
  @IsOptional()
  name?: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID do cliente', nullable: true })
  @IsOptional()
  @IsUUID()
  customerId?: string;
}
