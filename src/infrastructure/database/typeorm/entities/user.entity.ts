import { Role } from '@/domain/common/enums/role';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { DefaultEntity } from './default.entity';

@Entity('users')
export class UserEntity extends DefaultEntity {
  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: Role })
  role!: Role;

  @ManyToOne(() => CustomerEntity, customer => customer.users)
  customer!: CustomerEntity;
}
