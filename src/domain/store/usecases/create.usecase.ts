import { Injectable } from '@nestjs/common';
import { ICreateStoreInput, IViewStoreOutput } from '../interfaces/dtos';
import { IStoreRepository } from '../interfaces/repository/repository';
import { CreateStoreUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateStoreService implements CreateStoreUseCase {
  constructor(private readonly repository: IStoreRepository) {}

  async execute(input: ICreateStoreInput): Promise<IViewStoreOutput> {
    return this.repository.create(input);
  }
}
