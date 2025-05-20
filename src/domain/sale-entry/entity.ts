import { UniqueEntityID } from '@/common/helpers/uuid';
import { Product } from '../product/entity';
import { ISaleEntryInput } from './interfaces/dtos/sale-entry.input';

export class SaleEntry {
  public readonly id: string;
  public readonly date: Date;
  public readonly storeId: string;
  public readonly product?: Product | null;
  public readonly productId: string;
  public readonly createdBy?: string;
  public quantitySold?: number;
  public quantityReturned?: number;
  public unitCost?: number;
  public quantitySentToStore?: number;
  public salePrice?: number;

  constructor({
    id,
    date,
    storeId,
    productId,
    createdBy,
    quantitySold,
    quantityReturned,
    unitCost,
    quantitySentToStore,
    salePrice,
    product,
  }: ISaleEntryInput) {
    this.id = id ?? UniqueEntityID.create();
    this.date = date;
    this.product = product ?? null;
    this.storeId = storeId;
    this.productId = productId;
    this.createdBy = createdBy;
    this.quantitySold = quantitySold;
    this.quantityReturned = quantityReturned;
    this.unitCost = unitCost;
    this.quantitySentToStore = quantitySentToStore;
    this.salePrice = salePrice;
  }
}
