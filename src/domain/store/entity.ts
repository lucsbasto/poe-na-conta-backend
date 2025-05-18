export class Store {
  constructor(
    public readonly id: string,
    public name: string,
    public readonly customerId: string
  ) {}

  updateName(newName: string) {
    this.name = newName;
  }
}
