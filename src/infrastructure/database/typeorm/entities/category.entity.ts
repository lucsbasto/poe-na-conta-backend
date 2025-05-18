import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryColumn('uuid')
  @Index({ unique: true })
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  @Index({ unique: true })
  name!: string;

  @OneToMany(
    () => ProductEntity,
    (product) => product.category,
  )
  products!: ProductEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;
}
