import { Role } from '@/domain/common/enums/role';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';
import { SaleEntryEntity } from './sale-entry.entity';

@Entity('users')
@Index(['email'])
export class UserEntity extends DefaultEntity {
  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: Role })
  role!: Role;

  @OneToMany(
    () => SaleEntryEntity,
    (sale) => sale.product,
  )
  saleEntry!: SaleEntryEntity;

  @Column({ name: 'customer_id' })
  customerId!: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer) => customer.users,
  )
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity;
}
