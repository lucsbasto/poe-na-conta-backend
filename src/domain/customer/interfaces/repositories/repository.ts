// src/domain/customer/interfaces/repositories/repository.ts

import {
  CreateCustomerInput,
  UpdateCustomerInput,
  ViewCustomerOutput,
} from '../dtos';

export interface CustomerRepository {
  create(input: CreateCustomerInput): Promise<ViewCustomerOutput>;
  update(input: UpdateCustomerInput): Promise<ViewCustomerOutput>;
  findAll(): Promise<ViewCustomerOutput[]>;
  findOne(id: string): Promise<ViewCustomerOutput | null>;
  softDelete(id: string): Promise<void>;
}
