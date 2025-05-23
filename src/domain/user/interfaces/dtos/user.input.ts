import { Role } from '@/domain/common/enums/role';

export interface IUserInput {
  id?: string;
  name: string;
  password: string;
  email: string;
  role: Role;
  isActive?: boolean;
  customerId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
