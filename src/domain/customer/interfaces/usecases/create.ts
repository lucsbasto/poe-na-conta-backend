import { CreateCustomerInput, ViewCustomerOutput } from "../dtos";

export interface ICreateCustomerUseCase {
  execute(input: CreateCustomerInput): Promise<ViewCustomerOutput>;
}
