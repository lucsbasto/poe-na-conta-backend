import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { ICreateProductInput } from '../dtos';

export abstract class ICreateProductUseCase {
  abstract execute(input: ICreateProductInput): Promise<ProductEntity | null>;
}
