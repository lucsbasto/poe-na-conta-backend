import { IProductRepository } from '@/domain/product/interfaces/repository/repository';
import { ICreateProductUseCase } from '@/domain/product/interfaces/usecases/create';
import { IListAllProductUseCase } from '@/domain/product/interfaces/usecases/list-all.usecase';
import { CreateProductUseCase } from '@/domain/product/usecases/create.usecase';
import { ListAllProductUseCase } from '@/domain/product/usecases/list-all.usecase';
import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { ProductRepository } from '@/infrastructure/database/typeorm/repositories/product';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './api/controllers/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [
    {
      provide: IProductRepository,
      useClass: ProductRepository,
    },
    {
      provide: ICreateProductUseCase,
      useClass: CreateProductUseCase,
    },
    {
      provide: IListAllProductUseCase,
      useClass: ListAllProductUseCase,
    },
  ],
})
export class ProductModule {}
