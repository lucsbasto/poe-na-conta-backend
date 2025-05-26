import { UniqueEntityID } from '@/common/helpers/uuid';
import { RoleEnum } from '../common/enums/role';
import { IUserInput } from './interfaces/dtos/user.input';

export class User {
  public readonly id: string;
  public name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly customerId: string;
  public role: RoleEnum;
  public readonly isActive: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;

  constructor({ id, name, email, customerId, role, password, createdAt, updatedAt, deletedAt, isActive }: IUserInput) {
    this.id = id ?? UniqueEntityID.create();
    this.name = name;
    this.email = email;
    this.password = password;
    this.customerId = customerId;
    this.role = role;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
    this.deletedAt = deletedAt ?? null;
    this.isActive = isActive ?? true;
  }

  changeRoleEnum(role: RoleEnum) {
    this.role = role;
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      customerId: this.customerId,
      isActive: this.isActive,
      role: this.role,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
