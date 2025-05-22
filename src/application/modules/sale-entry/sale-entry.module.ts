import { IProductRepository } from '@/domain/product/interfaces/repository/repository';
import { IListAllProductUseCase } from '@/domain/product/interfaces/usecases/list-all.usecase';
import { ListAllProductUseCase } from '@/domain/product/usecases/list-all.usecase';
import { ISaleEntryRepository } from '@/domain/sale-entry/interfaces/repository/repository';
import { IListAllSalesEntryUseCase } from '@/domain/sale-entry/interfaces/usecases/list-all';
import { ListAllSalesEntryUseCase } from '@/domain/sale-entry/usecases/list-all.usecase';
import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { SaleEntryEntity } from '@/infrastructure/database/typeorm/entities/sale-entry.entity';
import { ProductRepository } from '@/infrastructure/database/typeorm/repositories/product';
import { SaleEntryRepository } from '@/infrastructure/database/typeorm/repositories/sale-entry';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntryController } from './api/controllers/sale-entry.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaleEntryEntity, ProductEntity])],
  controllers: [SalesEntryController],
  providers: [
    {
      provide: ISaleEntryRepository,
      useClass: SaleEntryRepository,
    },
    {
      provide: IProductRepository,
      useClass: ProductRepository,
    },
    {
      provide: IListAllSalesEntryUseCase,
      useClass: ListAllSalesEntryUseCase,
    },
    {
      provide: IListAllProductUseCase,
      useClass: ListAllProductUseCase,
    },
  ],
})
export class SaleEntryModule {}
