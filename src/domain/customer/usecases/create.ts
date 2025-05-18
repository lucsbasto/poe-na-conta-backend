import { Injectable } from '@nestjs/common';
import { ICreateCustomerInput, IViewCustomerOutput } from '../interfaces/dtos';
import { CustomerRepository } from '../interfaces/repositories/repository';
import { ICreateCustomerUseCase } from '../interfaces/usecases';

@Injectable()
export class CreateCustomerService implements ICreateCustomerUseCase {
  constructor(private readonly repository: CustomerRepository) {}

  async execute(input: ICreateCustomerInput): Promise<IViewCustomerOutput> {
    return this.repository.create(input);
  }
}
