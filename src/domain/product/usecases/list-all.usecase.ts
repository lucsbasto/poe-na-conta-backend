import { Inject, Injectable } from '@nestjs/common';
import { IViewProductOutput } from '../interfaces/dtos';
import { IFilterProductInput } from '../interfaces/dtos/filter.output';
import { IProductRepository } from '../interfaces/repository/repository';
import { IListAllProductUseCase } from '../interfaces/usecases/list-all.usecase';

@Injectable()
export class ListAllProductUseCase implements IListAllProductUseCase {
  constructor(
    @Inject(IProductRepository)
    private readonly repository: IProductRepository,
  ) {}

  async execute(filter: IFilterProductInput): Promise<IViewProductOutput[]> {
    const products = await this.repository.findAll(filter);
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      customerId: product.customerId,
      deletedAt: product.deletedAt,
    }));
  }
}
