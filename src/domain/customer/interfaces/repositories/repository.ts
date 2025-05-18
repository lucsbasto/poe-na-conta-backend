import { Customer } from '../../entity';
import { IViewCustomerOutput } from '../dtos';

export abstract class ICustomerRepository {
  abstract create(input: Customer): Promise<IViewCustomerOutput>;
  abstract update(id: string, input: Customer): Promise<IViewCustomerOutput | null>;
  abstract findAll(): Promise<IViewCustomerOutput[]>;
  abstract findOne(id: string): Promise<IViewCustomerOutput | null>;
  abstract softDelete(id: string): Promise<void>;
}
