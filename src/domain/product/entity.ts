export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public readonly customerId: string
  ) {}

  rename(newName: string) {
    this.name = newName;
  }
}
