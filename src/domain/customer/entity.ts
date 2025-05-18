import { UniqueEntityID } from "@/common/helpers/uuid";
import { ICreateCustomerInput } from "./interfaces/dtos";

export class Customer {
  public readonly id: string;
  public name: string;

  constructor({ name, id }: ICreateCustomerInput) {
    this.id = id ?? UniqueEntityID.create();
    this.name = name;
  }
}
