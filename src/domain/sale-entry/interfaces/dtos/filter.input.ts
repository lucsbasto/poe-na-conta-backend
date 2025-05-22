export interface IFilterSaleEntryInput {
  userId?: string;
  storeId?: string;
  quantitySold?: number;
  quantityUnsold?: number;
  quantitySentToStore?: number;
  unitCost?: number;
  unitPrice?: number;
  customerId?: string;
}
