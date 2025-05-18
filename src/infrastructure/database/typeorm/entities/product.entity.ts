import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('products')
export class ProductEntity extends DefaultEntity {
  @Column()
  name!: string;

  @ManyToOne(() => CustomerEntity, customer => customer.products)
  customer!: CustomerEntity;

  @OneToMany(() => SaleEntryEntity, sale => sale.product)
  sales!: SaleEntryEntity[];
}
