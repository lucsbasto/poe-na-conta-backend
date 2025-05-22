import { CustomerEntity } from '@/infrastructure/database/typeorm/entities/customer.entity';
import { Customer } from '../../entity';
import { IFilterCustomerInput } from '../dtos';

export abstract class ICustomerRepository {
  abstract create(input: Customer): Promise<CustomerEntity>;
  abstract update(id: string, input: Customer): Promise<CustomerEntity | null>;
  abstract findAll(filter: IFilterCustomerInput): Promise<CustomerEntity[]>;
  abstract findOne(id: string): Promise<CustomerEntity | null>;
  abstract softDelete(id: string): Promise<void>;
}
