import { IFilterSaleEntryInput } from '@/domain/sale-entry/interfaces/dtos/filter.input';
import { ISaleEntryRepository } from '@/domain/sale-entry/interfaces/repository/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleEntryEntity } from '../entities/sale-entry.entity';

@Injectable()
export class SaleEntryRepository implements ISaleEntryRepository {
  constructor(
    @InjectRepository(SaleEntryEntity)
    private readonly repository: Repository<SaleEntryEntity>,
  ) {}

  async save(input: SaleEntryEntity[]): Promise<SaleEntryEntity[]> {
    const createdEntities = await this.repository.create(input);
    return await this.repository.save(createdEntities);
  }

  async create(payload: SaleEntryEntity): Promise<SaleEntryEntity> {
    const entity = this.repository.create({
      ...payload,
      product: payload.product ? { id: payload.product.id } : undefined,
    });
    const saved = await this.repository.save(entity);
    return saved;
  }

  async update(saleEntry: SaleEntryEntity): Promise<SaleEntryEntity | null> {
    await this.repository.update(saleEntry.id, saleEntry);
    const updated = await this.repository.findOne({ where: { id: saleEntry.id } });
    return updated;
  }

  async findOne(id: string): Promise<SaleEntryEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(filter: IFilterSaleEntryInput): Promise<SaleEntryEntity[]> {
    return this.repository.find({ where: filter, relations: ['product'] });
  }

  async softDelete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
