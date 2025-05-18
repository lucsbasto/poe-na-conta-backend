import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entity';
import { IFilterCustomerInput, IViewCustomerOutput } from '../interfaces/dtos';
import { ICustomerRepository } from '../interfaces/repositories/repository';
import { IListAllCustomerUseCase } from '../interfaces/usecases/list-all';

@Injectable()
export class ListAllCustomerUseCase implements IListAllCustomerUseCase {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(input: IFilterCustomerInput): Promise<IViewCustomerOutput[]> {
    const customers = await this.repository.findAll(input);

    return customers.map((customer) => new Customer(customer));
  }
}
