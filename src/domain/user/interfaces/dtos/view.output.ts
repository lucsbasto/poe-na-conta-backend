import { RoleEnum } from '@/domain/common/enums/role';

export interface IViewUserOutput {
  id: string;
  name: string;
  password?: string;
  email: string;
  isActive: boolean;
  role: RoleEnum;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
