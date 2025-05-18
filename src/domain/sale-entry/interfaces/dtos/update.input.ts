export interface IUpdateSaleEntryInput {
  id: string;
  productId?: string;
  storeId?: string;
  userId?: string;
  quantitySold?: number;
  quantityUnsold?: number;
  quantitySentToStore?: number;
  unitCost?: number;
  unitPrice?: number;
  saleDate?: Date;
}
