import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { ICreateProductInput, IUpdateProductInput } from '../dtos';
import { IFilterProductInput } from '../dtos/filter.output';

export abstract class IProductRepository {
  abstract create(input: ICreateProductInput): Promise<ProductEntity | null>;
  abstract update(input: IUpdateProductInput): Promise<ProductEntity | null>;
  abstract findAll(filter?: IFilterProductInput): Promise<ProductEntity[]>;
  abstract findOne(id: string): Promise<ProductEntity | null>;
  abstract softDelete(id: string): Promise<void>;
}
