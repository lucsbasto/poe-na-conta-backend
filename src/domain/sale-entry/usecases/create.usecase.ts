import { Injectable } from '@nestjs/common';
import { ICreateSaleEntryInput, IViewSaleEntryOutput } from '../interfaces/dtos';
import { ISaleEntryRepository } from '../interfaces/repository/repository';
import { CreateSaleEntryUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateSaleEntryService implements CreateSaleEntryUseCase {
  constructor(private readonly repository: ISaleEntryRepository) {}

  async execute(input: ICreateSaleEntryInput): Promise<IViewSaleEntryOutput> {
    return this.repository.create(input);
  }
}
