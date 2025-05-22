import { CustomerEntity } from '@/infrastructure/database/typeorm/entities/customer.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entity';
import { ICreateCustomerInput } from '../interfaces/dtos';
import { ICustomerRepository } from '../interfaces/repositories/repository';
import { ICreateCustomerUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(input: ICreateCustomerInput): Promise<CustomerEntity | null> {
    const customer = new Customer(input);

    const created = await this.repository.create(customer);

    return created;
  }
}
