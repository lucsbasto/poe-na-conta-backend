export interface IViewSaleEntryOutput {
  id: string;
  date: Date;
  storeId: string;
  productId: string;
  createdBy: string;
  quantitySold: number;
  quantityUnsold: number;
  unitCost: number;
  quantitySentToStore: number;
  salePrice: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
