import { ProductStoreEntity } from '@/infrastructure/database/typeorm/entities/product-store.entity';

export abstract class IListAllProductStoreUseCase {
  abstract execute(filter?: any): Promise<ProductStoreEntity[]>;
}
