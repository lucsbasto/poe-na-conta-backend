import * as bcrypt from 'bcrypt';

export class PasswordManager {
  private static readonly SALT_ROUNDS = 12;

  static async hashPassword(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, PasswordManager.SALT_ROUNDS);
  }

  static async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
