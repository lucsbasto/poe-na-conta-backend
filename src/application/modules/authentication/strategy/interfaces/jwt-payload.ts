import { RoleEnum } from '@/domain/common/enums/role';

export interface JwtPayload {
  sub: string;
  email: string;
  name: string;
  role: RoleEnum;
  customerId: string;
  iat: number;
  exp: number;
}
