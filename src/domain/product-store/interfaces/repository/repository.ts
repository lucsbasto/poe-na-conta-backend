import {
  IFilterProductStoreInput,
  ProductStoreEntity,
} from '@/infrastructure/database/typeorm/entities/product-store.entity';

export abstract class IProductStoreRepository {
  abstract findAll(filter: IFilterProductStoreInput): Promise<ProductStoreEntity[]>;
  abstract findOne(id: string): Promise<ProductStoreEntity | null>;
}
