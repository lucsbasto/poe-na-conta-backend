import { IViewUserOutput } from '../dtos';
import { IFilterUserInput } from '../dtos/filter.input';

export abstract class IListAllUserUseCase {
  abstract execute(input?: IFilterUserInput): Promise<IViewUserOutput[]>;
}
