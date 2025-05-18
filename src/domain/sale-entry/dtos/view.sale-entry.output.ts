export interface ViewSaleEntryOutput {
  id: string;
  date: Date;
  storeId: string;
  productId: string;
  createdByUserId: string;
  quantitySold: number;
  quantityUnsold: number;
  unitCost: number;
  quantitySentToStore: number;
  salePrice: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
