import { Customer } from '@/domain/customer/entity';
import { IFilterCustomerInput, IViewCustomerOutput } from '@/domain/customer/interfaces/dtos';
import { ICustomerRepository } from '@/domain/customer/interfaces/repositories/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly repository: Repository<CustomerEntity>,
  ) {}

  async create(customer: Customer): Promise<IViewCustomerOutput> {
    const entity = this.repository.create(customer);
    const saved = await this.repository.save(entity);
    return saved;
  }

  async update(id: string, customer: Customer): Promise<IViewCustomerOutput | null> {
    await this.repository.update(id, customer);
    const updated = await this.repository.findOne({ where: { id } });
    return updated;
  }

  async findOne(id: string): Promise<IViewCustomerOutput | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(filter: IFilterCustomerInput): Promise<IViewCustomerOutput[]> {
    return this.repository.find({ where: filter });
  }

  async softDelete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
