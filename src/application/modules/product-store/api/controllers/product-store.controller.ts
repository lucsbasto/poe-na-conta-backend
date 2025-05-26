import { JwtAuthGuard } from '@/application/modules/authentication/guards/jwt-auth.guard';
import { IListAllProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/list-all';
import { IUpdateProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/update';
import { Body, Controller, Get, Inject, Param, Patch, Query, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse
} from '@nestjs/swagger';
import { Request } from 'express';


@ApiTags('Product Store')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('product-store')
export class ProductStoreController {
  constructor(
    @Inject(IListAllProductStoreUseCase)
    private readonly listAllProductStoreUseCase: IListAllProductStoreUseCase,
    @Inject(IUpdateProductStoreUseCase)
    private readonly updateProductStoreUseCase: IUpdateProductStoreUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os produtos' })
  @ApiOkResponse({ description: 'Lista de produtos' })
  async findAll(@Query() filter: any, @Req() req: Request): Promise<any> {
    const filterWithCustomer = { ...filter, customerId: req.user?.customerId };
    return this.listAllProductStoreUseCase.execute(filterWithCustomer);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de produto' })
  @ApiOkResponse({ description: 'Registro de produto atualizado com sucesso' })
  async update(@Param('id') id: string, @Body() payload: any): Promise<void> {
    return this.updateProductStoreUseCase.execute(id, payload);
  }
}
