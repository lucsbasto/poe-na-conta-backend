import { Role } from '@/domain/common/enums/role';

export interface JwtPayload {
  sub: string;
  email: string;
  name: string;
  role: Role;
  customerId: string;
  iat: number;
  exp: number;
}
