import { RoleEnum } from '@/domain/common/enums/role';

export interface IUserInput {
  id?: string;
  name: string;
  password: string;
  email: string;
  role: RoleEnum;
  isActive?: boolean;
  customerId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
