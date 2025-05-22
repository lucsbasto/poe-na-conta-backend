import { JwtAuthGuard } from '@/application/modules/authentication/guards/jwt-auth.guard';
import { ICreateProductUseCase } from '@/domain/product/interfaces/usecases/create';
import { IListAllProductUseCase } from '@/domain/product/interfaces/usecases/list-all.usecase';
import { Body, Controller, Get, Inject, Post, Query, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { CreateProductDto } from '../dtos/create.dto';
import { FilterProductDto } from '../dtos/filter.dto';
import { ViewProductDto } from '../dtos/view.dto';

@ApiTags('Products')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('products')
export class ProductController {
  constructor(
    @Inject(ICreateProductUseCase)
    private readonly createProductUseCase: ICreateProductUseCase,
    @Inject(IListAllProductUseCase)
    private readonly listAllProductUseCase: IListAllProductUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo produto' })
  @ApiCreatedResponse({ description: 'Produto criado com sucesso', type: ViewProductDto })
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createProductDto: CreateProductDto,
    @Req() req: Request,
  ): Promise<ViewProductDto | null> {
    if (!req.user?.customerId) {
      throw new Error('Customer ID não encontrado no token');
    }
    const payload = {
      ...createProductDto,
      customerId: req.user?.customerId,
      category: { id: createProductDto.categoryId },
    };

    return this.createProductUseCase.execute(payload);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os produtos' })
  @ApiOkResponse({ description: 'Lista de produtos', type: [ViewProductDto] })
  @ApiQuery({ name: 'id', required: false, type: String })
  @ApiQuery({ name: 'name', required: false, type: String })
  async findAll(@Query() filter: FilterProductDto, @Req() req: Request): Promise<ViewProductDto[]> {
    const filterWithCustomer = { ...filter, customerId: req.user?.customerId };
    return this.listAllProductUseCase.execute(filterWithCustomer);
  }
}
