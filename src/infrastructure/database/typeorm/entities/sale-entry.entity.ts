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
