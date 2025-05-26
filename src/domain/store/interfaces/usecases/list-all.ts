import { StoreEntity } from '@/infrastructure/database/typeorm/entities/store.entity';

export abstract class IListAllStoreUseCase {
  abstract execute(filter: any): Promise<StoreEntity[]>;
}
