import { StoreEntity } from "@/infrastructure/database/typeorm/entities/store.entity";

export abstract class IStoreRepository {
  abstract create(input: any): Promise<void>;
  abstract update(id: string, input: any): Promise<void>;
  abstract findAll(filter: any): Promise<StoreEntity[]>;
  abstract findById(id: string): Promise<StoreEntity | null>;
  abstract softDelete(id: string): Promise<void>;
}
