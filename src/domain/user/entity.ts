import { UniqueEntityID } from "@/common/helpers/uuid";
import { Role } from "../common/enums/role";
import { ICreateUserInput } from "./interfaces/dtos";

export class User {
  public readonly id: string;
  public name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly customerId: string;
  public role: Role;

  constructor({ id, name, email, customerId, role, password }: ICreateUserInput) {
    this.id = id ?? UniqueEntityID.create();
    this.name = name;
    this.email = email;
    this.password = password;
    this.customerId = customerId;
    this.role = role;
  }

  changeRole(role: Role) {
    this.role = role;
  }
}
