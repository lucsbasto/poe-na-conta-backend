import { Product } from '@/domain/product/entity';
import { IProductRepository } from '@/domain/product/interfaces/repository/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async create(product: Product): Promise<ProductEntity | null> {
    const entity = this.repository.create(product);
    await this.repository.save(entity);
    const updated = await this.repository.findOne({ where: { id: entity.id } });
    return updated;
  }

  async update(id: string, product: Product): Promise<ProductEntity | null> {
    await this.repository.update(id, product);
    const updated = await this.repository.findOne({ where: { id } });
    return updated;
  }

  async findOne(id: string): Promise<ProductEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(filter: any): Promise<ProductEntity[]> {
    return this.repository.find({ where: filter });
  }

  async softDelete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
