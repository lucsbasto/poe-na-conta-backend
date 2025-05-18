// infrastructure/modules/customer/api/controllers/customer.controller.ts
import { ICreateCustomerUseCase } from '@/domain/customer/interfaces/usecases';
import { IListAllCustomerUseCase } from '@/domain/customer/interfaces/usecases/list-all';
import { Body, Controller, Get, Inject, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { CreateCustomerDto } from '../dtos/create.dto';
import { ViewCustomerDto } from '../dtos/view.dto';

@ApiTags('Customer')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })
@Controller('customer')
export class CustomerController {
  constructor(
    @Inject(ICreateCustomerUseCase)
    private readonly createCustomerUseCase: ICreateCustomerUseCase,

    @Inject(IListAllCustomerUseCase)
    private readonly listAllCustomerUseCase: IListAllCustomerUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo cliente' })
  @ApiCreatedResponse({ description: 'Cliente criado com sucesso', type: ViewCustomerDto })
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createCustomerDto: CreateCustomerDto,
  ): Promise<ViewCustomerDto> {
    return this.createCustomerUseCase.execute(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os clientes' })
  @ApiOkResponse({ description: 'Lista de clientes', type: [ViewCustomerDto] })
  async findAll(): Promise<ViewCustomerDto[]> {
    return this.listAllCustomerUseCase.execute();
  }
}
