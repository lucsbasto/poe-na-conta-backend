import { ICreateCustomerInput } from '@/domain/customer/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto implements ICreateCustomerInput {
  @ApiProperty({ example: 'Acme Corporation', description: 'Nome do cliente' })
  @IsNotEmpty({ message: 'O nome do cliente é obrigatório' })
  @IsString({ message: 'O nome do cliente deve ser uma string' })
  name!: string;
}
