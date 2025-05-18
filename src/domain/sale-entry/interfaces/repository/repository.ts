// src/domain/sale-entry/interfaces/repositories/repository.ts

import {
  ICreateSaleEntryInput,
  IUpdateSaleEntryInput,
  IViewSaleEntryOutput,
} from '../dtos';

export interface ISaleEntryRepository {
  create(input: ICreateSaleEntryInput): Promise<IViewSaleEntryOutput>;
  update(input: IUpdateSaleEntryInput): Promise<IViewSaleEntryOutput>;
  findAll(): Promise<IViewSaleEntryOutput[]>;
  findOne(id: string): Promise<IViewSaleEntryOutput | null>;
  softDelete(id: string): Promise<void>;
}
