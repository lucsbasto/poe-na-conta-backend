import { ISaleEntryRepository } from '@/domain/sale-entry/interfaces/repository/repository';
import { IListAllSalesEntryUseCase } from '@/domain/sale-entry/interfaces/usecases/list-all';
import { ListAllSalesEntryUseCase } from '@/domain/sale-entry/usecases/list-all.usecase';
import { SaleEntryEntity } from '@/infrastructure/database/typeorm/entities/sale-entry.entity';
import { SaleEntryRepository } from '@/infrastructure/database/typeorm/repositories/sale-entry';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntryController } from './api/controllers/sale-entry.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaleEntryEntity])],
  controllers: [SalesEntryController],
  providers: [
    {
      provide: ISaleEntryRepository,
      useClass: SaleEntryRepository,
    },
    {
      provide: IListAllSalesEntryUseCase,
      useClass: ListAllSalesEntryUseCase,
    },
  ],
})
export class SaleEntryModule {}
