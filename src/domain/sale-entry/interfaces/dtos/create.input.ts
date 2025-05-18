export interface ICreateSaleEntryInput {
  id?: string;
  date: Date;
  storeId: string;
  productId: string;
  createdBy: string;
  quantitySold: number;
  quantityReturned: number;
  unitCost: number;
  quantitySentToStore: number;
  salePrice: number;
}
