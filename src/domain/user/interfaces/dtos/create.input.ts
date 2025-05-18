import { Role } from "@/domain/common/enums/role";

export interface ICreateUserInput {
  id?: string;
  email: string;
  password: string;
  role: Role;
  storeId: string;
  customerId: string;
}
