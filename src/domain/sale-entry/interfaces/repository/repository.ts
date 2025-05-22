// src/domain/sale-entry/interfaces/repositories/repository.ts

import { ICreateSaleEntryInput, SaleEntryEntity } from '@/infrastructure/database/typeorm/entities/sale-entry.entity';
import { IFilterSaleEntryInput } from '../dtos/filter.input';

export abstract class ISaleEntryRepository {
  abstract create(input: SaleEntryEntity): Promise<SaleEntryEntity>;
  abstract update(input: SaleEntryEntity): Promise<SaleEntryEntity | null>;
  abstract findAll(filter?: IFilterSaleEntryInput): Promise<SaleEntryEntity[]>;
  abstract findOne(id: string): Promise<SaleEntryEntity | null>;
  abstract softDelete(id: string): Promise<void>;
  abstract save(input: ICreateSaleEntryInput[]): Promise<SaleEntryEntity[]>;
}
