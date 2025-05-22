import { Role } from '@/domain/common/enums/role';

export interface ISignInOutput {
  token: string;
  expiresIn: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: Role;
    customerId: string;
  };
}
