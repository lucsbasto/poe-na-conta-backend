import { Injectable } from '@nestjs/common';
import { ICreateUserInput, IViewUserOutput } from '../interfaces/dtos';
import { IUserRepository } from '../interfaces/repository/repository';
import { CreateUserUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(input: ICreateUserInput): Promise<IViewUserOutput> {
    return this.repository.create(input);
  }
}
