import { IFilterCustomerInput, IViewCustomerOutput } from '../dtos';

export abstract class IListAllCustomerUseCase {
  abstract execute(input?: IFilterCustomerInput): Promise<IViewCustomerOutput[]>;
}
