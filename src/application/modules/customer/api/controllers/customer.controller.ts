import { ICreateCustomerUseCase } from '@/domain/customer/interfaces/usecases';
import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { CreateCustomerDto } from '../dtos/create.dto';
import { ViewCustomerDto } from '../dtos/view.dto';

@ApiTags('Customer')
@ApiBadRequestResponse({
  description: 'Dados inválidos no corpo da requisição',
})
@ApiUnprocessableEntityResponse({
  description: 'Erro de validação nos dados fornecidos',
})
@Controller('customer')
export class CustomerController {
  constructor(
    @Inject(ICreateCustomerUseCase)
    private readonly createCustomer: ICreateCustomerUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo cliente' })
  @ApiCreatedResponse({
    description: 'Cliente criado com sucesso',
    type: ViewCustomerDto,
  })
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createCustomerDto: CreateCustomerDto,
  ): Promise<ViewCustomerDto> {
    return this.createCustomer.execute(createCustomerDto);
  }
}
