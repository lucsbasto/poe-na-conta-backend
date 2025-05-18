import { UniqueEntityID } from '@/common/helpers/uuid';
import { ICustomerInput } from './interfaces/dtos/customer.input';

export class Customer {
  public readonly id: string;
  public name: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly deletedAt: Date | null;

  constructor({ name, id, createdAt, updatedAt, deletedAt }: ICustomerInput) {
    this.id = id ?? UniqueEntityID.create();
    this.name = name;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
    this.deletedAt = deletedAt ?? null;
  }
}
