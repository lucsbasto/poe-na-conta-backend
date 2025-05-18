import { IFilterCustomerInput } from '@/domain/customer/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class FilterCustomerDto implements IFilterCustomerInput {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID único do cliente', nullable: true })
  @IsOptional()
  @IsUUID()
  id!: string;

  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do cliente', nullable: true })
  @IsOptional()
  name!: string;

  @ApiProperty({ example: '2024-04-01T12:00:00Z', description: 'Data de criação', nullable: true })
  @IsOptional()
  createdAt!: Date;

  @ApiProperty({ example: '2024-05-01T12:00:00Z', description: 'Data da última atualização', nullable: true })
  @IsOptional()
  updatedAt!: Date;

  @ApiProperty({
    example: null,
    description: 'Data da exclusão (soft delete), ou null se não excluído',
    nullable: true,
  })
  @IsOptional()
  deletedAt!: Date | null;
}
