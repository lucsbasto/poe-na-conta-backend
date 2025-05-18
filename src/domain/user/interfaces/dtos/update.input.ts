import { Role } from "@/domain/common/enums/role";

export interface IUpdateUserInput {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: Role;
  storeId?: string;
  customerId?: string;
}
