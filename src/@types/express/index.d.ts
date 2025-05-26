import { RoleEnum } from '@/domain/authentication/enums/role.enum';

declare global {
  namespace Express {
    interface User {
      sub: string;
      email: string;
      name: string;
      role: RoleEnum;
      customerId: string;
      iat: number;
      exp: number;
    }
  }
}
