import { CustomerEntity } from '@/infrastructure/database/typeorm/entities/customer.entity';
import { ICreateCustomerInput } from '../dtos';

export abstract class ICreateCustomerUseCase {
  abstract execute(input: ICreateCustomerInput): Promise<CustomerEntity | null>;
}
