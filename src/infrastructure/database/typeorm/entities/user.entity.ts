import { RoleEnum } from '@/domain/common/enums/role';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('users')
export class UserEntity extends DefaultEntity {
  @Column()
  name!: string;

  @Column({ unique: true })
  @Index()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: true, nullable: false, type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'enum', enum: RoleEnum })
  @Index()
  role!: RoleEnum;

  @OneToMany(
    () => SaleEntryEntity,
    (sale) => sale.product,
  )
  saleEntry!: SaleEntryEntity;

  @Column({ name: 'customer_id' })
  @Index()
  customerId!: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer) => customer.users,
  )
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity;
}
