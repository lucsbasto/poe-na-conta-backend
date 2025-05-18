export interface UpdateSaleEntryInput {
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
