import { IUpdateProductStore } from '@/infrastructure/database/typeorm/entities/product-store.entity';

export abstract class IUpdateProductStoreUseCase {
  abstract execute(id: string, payload: IUpdateProductStore): Promise<void>;
}
