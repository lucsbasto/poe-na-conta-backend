import { ICreateUserUseCase } from '@/domain/user/interfaces/usecases/create';
import { IListAllUserUseCase } from '@/domain/user/interfaces/usecases/list-all';
import { Body, Controller, Get, Inject, Post, Query, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create.dto';
import { FilterUserDto } from '../dtos/filter.dto';
import { ViewUserDto } from '../dtos/view.dto';

@ApiTags('Users')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

@Controller('users')
export class CustomerController {
  constructor(
    @Inject(ICreateUserUseCase)
    private readonly createUserUseCase: ICreateUserUseCase,
    @Inject(IListAllUserUseCase)
    private readonly listAllUserUseCase: IListAllUserUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiCreatedResponse({ description: 'Usuário criado com sucesso', type: ViewUserDto })
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createCustomerDto: CreateUserDto,
  ): Promise<ViewUserDto> {
    return this.createUserUseCase.execute(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os clientes' })
  @ApiOkResponse({ description: 'Lista de clientes', type: [ViewUserDto] })
  @ApiQuery({ name: 'id', required: false, type: String })
  @ApiQuery({ name: 'name', required: false, type: String })
  async findAll(@Query() filter: FilterUserDto): Promise<ViewUserDto[]> {
    return this.listAllUserUseCase.execute(filter);
  }
}
