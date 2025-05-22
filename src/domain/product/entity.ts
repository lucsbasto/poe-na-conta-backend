import { ICreateProductInput } from './interfaces/dtos';

export class Product {
  public readonly id?: string;
  public name: string;
  public readonly customerId: string;
  public readonly categoryId: string;

  constructor({ id, name, customerId, categoryId }: ICreateProductInput) {
    this.id = id;
    this.name = name;
    this.customerId = customerId;
    this.categoryId = categoryId;
  }
}
