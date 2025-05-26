import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { IUpdateProductStore } from '@/infrastructure/database/typeorm/entities/product-store.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IUpdateProductStoreUseCase } from '../interfaces/usecases/update';

@Injectable()
export class UpdateProductStoreUseCase implements IUpdateProductStoreUseCase {
  constructor(
    @Inject(IProductStoreRepository)
    private readonly repository: IProductStoreRepository,
  ) {}

  async execute(id: string, payload: IUpdateProductStore): Promise<void> {
    await this.repository.update(id, payload);
  }
}
