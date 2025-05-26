import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { IListAllProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/list-all';
import { ListAllProductStoreUseCase } from '@/domain/product-store/usecases/list-all.usecase';
import { IProductRepository } from '@/domain/product/interfaces/repository/repository';
import { ISaleEntryRepository } from '@/domain/sale-entry/interfaces/repository/repository';
import { IListAllSalesEntryUseCase } from '@/domain/sale-entry/interfaces/usecases/list-all';
import { ListAllSalesEntryUseCase } from '@/domain/sale-entry/usecases/list-all.usecase';
import { ProductStoreEntity } from '@/infrastructure/database/typeorm/entities/product-store.entity';
import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { SaleEntryEntity } from '@/infrastructure/database/typeorm/entities/sale-entry.entity';
import { ProductRepository } from '@/infrastructure/database/typeorm/repositories/product';
import { ProductStoreRepository } from '@/infrastructure/database/typeorm/repositories/product-store';
import { SaleEntryRepository } from '@/infrastructure/database/typeorm/repositories/sale-entry';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntryController } from './api/controllers/sale-entry.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaleEntryEntity, ProductEntity, ProductStoreEntity])],
  controllers: [SalesEntryController],
  providers: [
    {
      provide: ISaleEntryRepository,
      useClass: SaleEntryRepository,
    },
    {
      provide: IProductStoreRepository,
      useClass: ProductStoreRepository,
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
      provide: IListAllProductStoreUseCase,
      useClass: ListAllProductStoreUseCase,
    },
  ],
})
export class SaleEntryModule {}
