import { IStoreRepository } from '@/domain/store/interfaces/repository/repository';
import { IListAllStoreUseCase } from '@/domain/store/interfaces/usecases/list-all';
import { ListAllStoreUseCase } from '@/domain/store/usecases/list-all.usecase';
import { StoreEntity } from '@/infrastructure/database/typeorm/entities/store.entity';
import { StoreRepository } from '@/infrastructure/database/typeorm/repositories/store';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreController } from './api/controller/store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoreEntity])],
  controllers: [StoreController],
  providers: [
    {
      provide: IStoreRepository,
      useClass: StoreRepository,
    },
    {
      provide: IListAllStoreUseCase,
      useClass: ListAllStoreUseCase,
    },
  ],
  exports: [],
})
export class StoreModule {}
