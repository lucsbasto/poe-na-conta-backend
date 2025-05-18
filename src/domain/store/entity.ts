import { UniqueEntityID } from "@/common/helpers/uuid";
import { ICreateStoreInput } from "./interfaces/dtos";

export class Store {
  public readonly id: string;
  public name: string;
  public readonly customerId: string;

  constructor({ id, name, customerId }: ICreateStoreInput) {
    this.id = id ?? UniqueEntityID.create();
    this.name = name;
    this.customerId = customerId;
  }
}
