import { SaleEntryEntity } from '@/infrastructure/database/typeorm/entities/sale-entry.entity';

export abstract class IListAllSalesEntryUseCase {
  abstract execute(filter?: any): Promise<SaleEntryEntity[]>;
}
