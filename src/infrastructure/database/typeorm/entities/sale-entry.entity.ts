import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { ProductEntity } from './product.entity';
import { StoreEntity } from './store.entity';
import { UserEntity } from './user.entity';

@Entity('sale_entries')
@Index(['store', 'product', 'date'])
export class SaleEntryEntity extends DefaultEntity {
  @Column({ type: 'date' })
  date!: Date;

  @ManyToOne(
    () => StoreEntity,
    (store) => store.sales,
  )
  @JoinColumn({ name: 'store_id' })
  store!: StoreEntity;

  @ManyToOne(
    () => ProductEntity,
    (product) => product.sales,
  )
  @JoinColumn({ name: 'product_id' })
  product!: ProductEntity;

  @Column({ name: 'store_id', type: 'varchar' })
  storeId!: string;

  @Column({ name: 'product_id', type: 'varchar' })
  productId!: string;

  @Column({ name: 'created_by', type: 'varchar' })
  createdById!: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.saleEntry,
  )
  @JoinColumn({ name: 'created_by' })
  createdBy!: UserEntity;

  @Column('int')
  quantitySold!: number;

  @Column('int')
  quantityReturned!: number;

  @Column('decimal')
  unitCost!: number;

  @Column('int')
  quantitySentToStore!: number;

  @Column('decimal')
  salePrice!: number;
}

export type IUpdateSaleEntryInput = Partial<SaleEntryEntity>;
export type ICreateSaleEntryInput = Omit<SaleEntryEntity, 'id' | 'createdAt' | 'updatedAt'>;
