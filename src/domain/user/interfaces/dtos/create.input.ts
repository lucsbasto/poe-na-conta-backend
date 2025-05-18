import { Role } from "@/domain/common/enums/role";

export interface ICreateUserInput {
  id?: string;
  email: string;
  name: string;
  password: string;
  role: Role;
  customerId: string;
}
