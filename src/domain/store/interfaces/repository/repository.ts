import { ICreateStoreInput, IUpdateStoreInput, IViewStoreOutput } from "../dtos";

export interface IStoreRepository {
  create(input: ICreateStoreInput): Promise<IViewStoreOutput>;
  update(input: IUpdateStoreInput): Promise<IViewStoreOutput>;
  findAll(): Promise<IViewStoreOutput[]>;
  findOne(id: string): Promise<IViewStoreOutput | null>;
  softDelete(id: string): Promise<void>;
}
