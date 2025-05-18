import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { ProductEntity } from './product.entity';
import { StoreEntity } from './store.entity';
import { UserEntity } from './user.entity';


@Entity('customers')
export class CustomerEntity extends DefaultEntity {
  @Column()
  name!: string;

  @OneToMany(() => StoreEntity, store => store.customer)
  stores!: StoreEntity[];

  @OneToMany(() => ProductEntity, product => product.customer)
  products!: ProductEntity[];

  @OneToMany(() => UserEntity, user => user.customer)
  users!: UserEntity[];
}
