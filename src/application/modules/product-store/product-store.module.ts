import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { IListAllProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/list-all';
import { ListAllProductStoreUseCase } from '@/domain/product-store/usecases/list-all.usecase';
import { ProductStoreEntity } from '@/infrastructure/database/typeorm/entities/product-store.entity';
import { ProductStoreRepository } from '@/infrastructure/database/typeorm/repositories/product-store';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStoreController } from './api/controllers/product-store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductStoreEntity])],
  controllers: [ProductStoreController],
  providers: [
    {
      provide: IProductStoreRepository,
      useClass: ProductStoreRepository,
    },
    {
      provide: IListAllProductStoreUseCase,
      useClass: ListAllProductStoreUseCase,
    },
  ],
})
export class ProductStoreModule {}
