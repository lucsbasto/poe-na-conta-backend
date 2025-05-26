import {
  IUpdateProductStore,
  ProductStoreEntity
} from '@/infrastructure/database/typeorm/entities/product-store.entity';

export abstract class IProductStoreRepository {
  abstract findAll(filter: any): Promise<ProductStoreEntity[]>;
  abstract findOne(id: string): Promise<ProductStoreEntity | null>;
  abstract update(id: string, data: IUpdateProductStore): Promise<void>;
}
