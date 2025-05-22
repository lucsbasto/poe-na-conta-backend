import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateProductInput } from '../interfaces/dtos';
import { IProductRepository } from '../interfaces/repository/repository';
import { ICreateProductUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @Inject(IProductRepository)
    private readonly repository: IProductRepository,
  ) {}

  async execute(input: ICreateProductInput): Promise<ProductEntity | null> {
    const product = await this.repository.create(input);
    return product;
  }
}
