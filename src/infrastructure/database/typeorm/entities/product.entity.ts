import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { ProductStoreEntity } from './product-store.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('products')
@Index(['name', 'customer'], { unique: true })
export class ProductEntity extends DefaultEntity {
  @Column()
  name!: string;

  @OneToMany(
    () => ProductStoreEntity,
    (productStore) => productStore.product,
  )
  productStores?: ProductStoreEntity[];

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.products,
    { eager: true },
  )
  @JoinColumn({ name: 'category_id' })
  category!: CategoryEntity;

  @Column({ name: 'customer_id' })
  customerId!: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer) => customer.products,
  )
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity;

  @OneToMany(
    () => SaleEntryEntity,
    (sale) => sale.product,
  )
  sales!: SaleEntryEntity[];
}

export type IFilterProductInput = Partial<ProductEntity>;
