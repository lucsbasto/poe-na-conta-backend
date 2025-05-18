import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('products')
@Index(['name', 'customer'], { unique: true })
export class ProductEntity extends DefaultEntity {
  @Column()
  name!: string;

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.products,
    { eager: true },
  )
  @JoinColumn({ name: 'category_id' })
  category!: CategoryEntity;

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
