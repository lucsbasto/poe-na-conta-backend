import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { ProductStoreEntity } from './product-store.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('stores')
@Index(['name', 'customer'], { unique: true })
export class StoreEntity extends DefaultEntity {
  @Column()
  name!: string;

  @Column({ name: 'customer_id' })
  customerId!: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer) => customer.stores,
  )
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity;

  @OneToMany(
    () => SaleEntryEntity,
    (sale) => sale.store,
  )
  sales!: SaleEntryEntity[];

  @OneToMany(
    () => ProductStoreEntity,
    (productStore) => productStore.store,
  )
  productStores?: ProductStoreEntity[];
}
