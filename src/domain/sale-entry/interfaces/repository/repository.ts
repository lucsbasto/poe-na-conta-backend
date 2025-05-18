// src/domain/sale-entry/interfaces/repositories/repository.ts

import {
  CreateSaleEntryInput,
  UpdateSaleEntryInput,
  ViewSaleEntryOutput,
} from '../dtos';

export interface SaleEntryRepository {
  create(input: CreateSaleEntryInput): Promise<ViewSaleEntryOutput>;
  update(input: UpdateSaleEntryInput): Promise<ViewSaleEntryOutput>;
  findAll(): Promise<ViewSaleEntryOutput[]>;
  findOne(id: string): Promise<ViewSaleEntryOutput | null>;
  softDelete(id: string): Promise<void>;
}
