import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { ProductStoreEntity } from '@/infrastructure/database/typeorm/entities/product-store.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductStoreRepository implements IProductStoreRepository {
  constructor(
    @InjectRepository(ProductStoreEntity)
    private readonly repository: Repository<ProductStoreEntity>,
  ) {}

  async findAll(filter: any): Promise<ProductStoreEntity[]> {
    return this.repository.find({ where: filter });
  }

  async findOne(id: string): Promise<ProductStoreEntity | null> {
    return this.repository.findOne({ where: { id } });
  }
}
