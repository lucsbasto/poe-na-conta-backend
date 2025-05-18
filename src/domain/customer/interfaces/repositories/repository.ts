import { ICreateCustomerInput, IUpdateCustomerInput, IViewCustomerOutput } from "../dtos";


export interface CustomerRepository {
  create(input: ICreateCustomerInput): Promise<IViewCustomerOutput>;
  update(input: IUpdateCustomerInput): Promise<IViewCustomerOutput>;
  findAll(): Promise<IViewCustomerOutput[]>;
  findOne(id: string): Promise<IViewCustomerOutput | null>;
  softDelete(id: string): Promise<void>;
}
