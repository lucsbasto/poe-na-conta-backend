import { Role } from "../common/enums/role";

export class User {
  constructor(
    public readonly id: string,
    public email: string,
    private passwordHash: string,
    public readonly storeId: string,
    public readonly customerId: string,
    public role: Role
  ) {}

  updatePassword(newHash: string) {
    this.passwordHash = newHash;
  }

  checkPassword(hash: string): boolean {
    return this.passwordHash === hash;
  }

  promoteTo(role: Role) {
    this.role = role;
  }
}
