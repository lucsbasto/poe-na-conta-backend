import { Column, Entity, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { ProductEntity } from './product.entity';
import { StoreEntity } from './store.entity';
import { UserEntity } from './user.entity';

@Entity('sale_entries')
export class SaleEntryEntity extends DefaultEntity {
  @Column({ type: 'date' })
  date!: Date;

  @ManyToOne(() => StoreEntity, store => store.sales)
  store!: StoreEntity;

  @ManyToOne(() => ProductEntity, product => product.sales)
  product!: ProductEntity;

  @ManyToOne(() => UserEntity)
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
