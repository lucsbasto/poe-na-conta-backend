import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { IFilterProductInput } from '../dtos/filter.output';

export abstract class IListAllProductUseCase {
  abstract execute(input: IFilterProductInput): Promise<ProductEntity[]>;
}
