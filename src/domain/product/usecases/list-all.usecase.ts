import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IFilterProductInput } from '../interfaces/dtos/filter.output';
import { IProductRepository } from '../interfaces/repository/repository';
import { IListAllProductUseCase } from '../interfaces/usecases/list-all.usecase';

@Injectable()
export class ListAllProductUseCase implements IListAllProductUseCase {
  constructor(
    @Inject(IProductRepository)
    private readonly repository: IProductRepository,
  ) {}

  async execute(filter: IFilterProductInput): Promise<ProductEntity[]> {
    return await this.repository.findAll(filter);
  }
}
