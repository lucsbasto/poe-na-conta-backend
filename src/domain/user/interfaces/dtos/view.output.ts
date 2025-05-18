import { Role } from "@/domain/common/enums/role";

export interface IViewUserOutput {
  id: string;
  email: string;
  role: Role;
  storeId: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
