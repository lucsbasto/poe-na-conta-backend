import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { DefaultEntity } from './default.entity';
import { ProductEntity } from './product.entity';
import { StoreEntity } from './store.entity';

@Entity('product_store')
export class ProductStoreEntity extends DefaultEntity {
  @ManyToOne(
    () => ProductEntity,
    (product) => product.productStores,
    { eager: true },
  )
  @JoinColumn({ name: 'product_id' })
  product!: ProductEntity;

  @Column('uuid', { name: 'product_id' })
  productId!: string;

  @Column({ nullable: true, name: 'quantity', type: 'integer' })
  quantity!: number;


  @Column({ default: true, nullable: false, type: 'boolean' })
  isActive!: boolean;

  @ManyToOne(
    () => StoreEntity,
    (store) => store.productStores,
    { eager: true },
  )
  @JoinColumn({ name: 'store_id' })
  store!: StoreEntity;

  @Column('uuid', { name: 'store_id' })
  storeId!: string;

  @Column('decimal', { precision: 12, scale: 2, nullable: false, name: 'unit_cost' })
  unitCost!: number;

  @Column('decimal', { precision: 12, scale: 2, nullable: false, name: 'sale_price' })
  salePrice!: number;
}

export type IFilterProductStoreInput = Partial<ProductStoreEntity>;
export type IUpdateProductStore = Partial<ProductStoreEntity>;
