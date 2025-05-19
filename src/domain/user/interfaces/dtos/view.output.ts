import { Role } from '@/domain/common/enums/role';

export interface IViewUserOutput {
  id: string;
  name: string;
  password?: string;
  email: string;
  role: Role;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
