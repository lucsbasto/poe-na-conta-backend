import { JwtAuthGuard } from '@/application/modules/authentication/guards/jwt-auth.guard';
import { IListAllSalesEntryUseCase } from '@/domain/sale-entry/interfaces/usecases/list-all';
import { Controller, Get, Inject, Query, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { FilterSaleEntryDto } from '../dtos/filter.dto';
import { ViewSaleEntryOutputDto } from '../dtos/view.dto';

@ApiTags('Sales Entry')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sales-entry')
export class SalesEntryController {
  constructor(
    @Inject(IListAllSalesEntryUseCase)
    private readonly listAllSaleEntryUseCase: IListAllSalesEntryUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de vendas' })
  @ApiOkResponse({ description: 'Lista de registros de vendas', type: [ViewSaleEntryOutputDto] })
  @ApiQuery({ name: 'id', required: false, type: String })
  @ApiQuery({ name: 'name', required: false, type: String })
  async findAll(@Query() filter: FilterSaleEntryDto, @Req() req: Request): Promise<any[]> {
    const userId = req.user?.sub;
    if (userId === undefined) {
      throw new Error('User ID not found in request');
    }
    return this.listAllSaleEntryUseCase.execute(userId, filter);
  }
}
