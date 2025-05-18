import { Injectable } from '@nestjs/common';
import { ICreateProductInput, IViewProductOutput } from '../interfaces/dtos';
import { IProductRepository } from '../interfaces/repository/repository';
import { ICreateProductUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateProductService implements ICreateProductUseCase {
  constructor(private readonly repository: IProductRepository) {}

  async execute(input: ICreateProductInput): Promise<IViewProductOutput> {
    return this.repository.create(input);
  }
}
