import { StoreEntity } from '@/infrastructure/database/typeorm/entities/store.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IStoreRepository } from '../interfaces/repository/repository';
import { IListAllStoreUseCase } from '../interfaces/usecases/list-all';

@Injectable()
export class ListAllStoreUseCase implements IListAllStoreUseCase {
  constructor(
    @Inject(IStoreRepository)
    private readonly repository: IStoreRepository,
  ) {}

  async execute(filter: any): Promise<StoreEntity[]> {
    const stores = await this.repository.findAll(filter);
    return stores;
  }
}
