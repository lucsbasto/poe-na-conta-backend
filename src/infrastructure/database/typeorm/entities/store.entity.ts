import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('stores')
export class StoreEntity extends DefaultEntity {
  @Column()
  name!: string;

  @ManyToOne(() => CustomerEntity, customer => customer.stores)
  customer!: CustomerEntity;

  @OneToMany(() => SaleEntryEntity, sale => sale.store)
  sales!: SaleEntryEntity[];
}
