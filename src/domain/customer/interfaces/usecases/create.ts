import { ICreateCustomerInput, IViewCustomerOutput } from '../dtos';

export abstract class ICreateCustomerUseCase {
  abstract execute(input: ICreateCustomerInput): Promise<IViewCustomerOutput>;
}
