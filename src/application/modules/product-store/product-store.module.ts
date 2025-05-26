import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { IListAllProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/list-all';
import { IUpdateProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/update';
import { ListAllProductStoreUseCase } from '@/domain/product-store/usecases/list-all.usecase';
import { UpdateProductStoreUseCase } from '@/domain/product-store/usecases/update.usecase';
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
    {
      provide: IUpdateProductStoreUseCase,
      useClass: UpdateProductStoreUseCase,
    },
  ],
})
export class ProductStoreModule {}
