import { CreateStoreInput, UpdateStoreInput, ViewStoreOutput } from "../dtos";

export interface StoreRepository {
  create(input: CreateStoreInput): Promise<ViewStoreOutput>;
  update(input: UpdateStoreInput): Promise<ViewStoreOutput>;
  findAll(): Promise<ViewStoreOutput[]>;
  findOne(id: string): Promise<ViewStoreOutput | null>;
  softDelete(id: string): Promise<void>;
}
