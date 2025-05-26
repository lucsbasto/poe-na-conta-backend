import { RoleEnum } from '@/domain/common/enums/role';

export interface IFilterUserInput {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: RoleEnum;
  customerId?: string;
}
