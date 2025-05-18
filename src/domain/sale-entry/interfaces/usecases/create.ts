import { ICreateSaleEntryInput, IViewSaleEntryOutput } from '../dtos';

export abstract class CreateSaleEntryUseCase {
  abstract execute(input: ICreateSaleEntryInput): Promise<IViewSaleEntryOutput>;
}
