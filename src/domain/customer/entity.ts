import { UniqueEntityID } from "@/common/helpers/uuid";
import { CreateCustomerInput } from "./interfaces/dtos";

export class Customer {
  public readonly id: string;
  public name: string;

  constructor({ name, id }: CreateCustomerInput) {
    this.id = id ?? UniqueEntityID.create();
    this.name = name;
  }
}
