import { IViewProductOutput } from '../dtos';
import { IFilterProductInput } from '../dtos/filter.output';

export abstract class IListAllProductUseCase {
  abstract execute(input: IFilterProductInput): Promise<IViewProductOutput[]>;
}
