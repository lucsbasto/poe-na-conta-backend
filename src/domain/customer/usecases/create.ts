import { Injectable } from '@nestjs/common';
import { Customer } from '../entity';
import { ICreateCustomerInput, IViewCustomerOutput } from '../interfaces/dtos';
import { ICustomerRepository } from '../interfaces/repositories/repository';
import { ICreateCustomerUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateCustomerService implements ICreateCustomerUseCase {
  constructor(private readonly repository: ICustomerRepository) {}

  async execute(input: ICreateCustomerInput): Promise<IViewCustomerOutput> {
    const customer = new Customer(input);

    const created = await this.repository.create(customer);

    return created;
  }
}
