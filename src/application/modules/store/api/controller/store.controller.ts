import { IListAllStoreUseCase } from '@/domain/store/interfaces/usecases/list-all';
import { Controller, Get, Inject, Req } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse
} from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Stores')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

@Controller('stores')
export class StoreController {
  constructor(
    @Inject(IListAllStoreUseCase)
    private readonly listAllStoreUseCase: IListAllStoreUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os estabelecimentos' })
  @ApiOkResponse({ description: 'Lista de estabelecimentos' })
  async findAll(@Req() req: Request): Promise<any[]> {
    const customerId = req.user?.customerId;
    return this.listAllStoreUseCase.execute({ customerId });
  }
}
