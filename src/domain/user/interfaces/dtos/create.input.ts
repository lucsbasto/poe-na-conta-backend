import { Role } from "@/domain/common/enums/role";

export interface CreateUserInput {
  id?: string;
  email: string;
  password: string;
  role: Role;
  storeId: string;
  customerId: string;
}
