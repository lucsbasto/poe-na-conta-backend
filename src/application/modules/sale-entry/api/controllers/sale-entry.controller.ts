import { IListAllSalesEntryUseCase } from '@/domain/sale-entry/interfaces/usecases/list-all';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { FilterCustomerDto } from '../dtos/filter.dto';
import { ViewSaleEntryOutputDto } from '../dtos/view.dto';

@ApiTags('Sales Entry')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

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
  async findAll(@Query() filter: FilterCustomerDto): Promise<any[]> {
    return this.listAllSaleEntryUseCase.execute(filter);
  }
}
