export class SaleEntry {
  constructor(
    public readonly id: string,
    public readonly date: Date,
    public readonly storeId: string,
    public readonly productId: string,
    public readonly createdByUserId: string,
    public quantitySold: number,
    public quantityUnsold: number,
    public unitCost: number,
    public quantitySentToStore: number,
    public salePrice: number
  ) {
    if (quantitySold + quantityUnsold > quantitySentToStore) {
      throw new Error('Total vendido + não vendido não pode ser maior que a quantidade enviada.');
    }
  }

  updateQuantities(sold: number, unsold: number) {
    if (sold + unsold > this.quantitySentToStore) {
      throw new Error('Total vendido + não vendido não pode exceder a quantidade enviada.');
    }

    this.quantitySold = sold;
    this.quantityUnsold = unsold;
  }
}
