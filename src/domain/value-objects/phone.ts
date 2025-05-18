export class Phone {
  private readonly value: string;

  constructor(value: string) {
    const digits = value.replace(/\D/g, '');
    if (!this.isValid(digits)) {
      throw new Error('Invalid phone number');
    }
    this.value = digits;
  }

  private isValid(digits: string): boolean {
    return digits.length >= 10 && digits.length <= 13;
  }

  toString(): string {
    return this.value;
  }

  equals(other: Phone): boolean {
    return this.value === other.toString();
  }
}
