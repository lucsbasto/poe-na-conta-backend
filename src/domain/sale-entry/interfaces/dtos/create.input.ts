export interface ICreateSaleEntryInput {
  id?: string;
  date: Date;
  storeId: string;
  productId: string;
  createdByUserId: string;
  quantitySold: number;
  quantityUnsold: number;
  unitCost: number;
  quantitySentToStore: number;
  salePrice: number;
}
