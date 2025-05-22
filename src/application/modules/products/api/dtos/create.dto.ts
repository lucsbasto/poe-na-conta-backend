import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: '123456789', description: 'ID da categoria' })
  @IsNotEmpty({ message: 'O ID da categoria é obrigatório' })
  @IsUUID('4', { message: 'O ID da categoria deve ser um UUID v4' })
  categoryId!: string;

  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do produto' })
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  @IsString({ message: 'O nome do produto deve ser uma string' })
  name!: string;
}
