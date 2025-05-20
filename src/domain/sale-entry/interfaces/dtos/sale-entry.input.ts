import { Product } from '@/domain/product/entity';

export interface ISaleEntryInput {
  id?: string;
  date: Date;
  storeId: string;
  productId: string;
  product?: Product | null;
  createdBy: string;
  quantitySold?: number;
  quantityReturned?: number;
  unitCost: number;
  quantitySentToStore?: number;
  salePrice: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
