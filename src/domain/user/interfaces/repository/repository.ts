// src/domain/user/interfaces/repositories/repository.ts

import {
  CreateUserInput,
  UpdateUserInput,
  ViewUserOutput,
} from '../dtos';

export interface UserRepository {
  create(input: CreateUserInput): Promise<ViewUserOutput>;
  update(input: UpdateUserInput): Promise<ViewUserOutput>;
  findAll(): Promise<ViewUserOutput[]>;
  findOne(id: string): Promise<ViewUserOutput | null>;
  softDelete(id: string): Promise<void>;
}
