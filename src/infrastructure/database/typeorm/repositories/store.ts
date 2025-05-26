import { IStoreRepository } from '@/domain/store/interfaces/repository/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreEntity } from '../entities/store.entity';

@Injectable()
export class StoreRepository implements IStoreRepository {
  constructor(
    @InjectRepository(StoreEntity)
    private readonly repository: Repository<StoreEntity>,
  ) {}

  async create(payload: any): Promise<void> {
    const entity = this.repository.create(payload);
    await this.repository.save(entity);
  }

  async update(id: string, user: any): Promise<void> {
    await this.repository.update(id, user);
  }

  async findById(id: string): Promise<StoreEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<StoreEntity[]> {
    return this.repository.find();
  }

  async softDelete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
