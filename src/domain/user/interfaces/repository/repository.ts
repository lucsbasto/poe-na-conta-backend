import { UserEntity } from '@/infrastructure/database/typeorm/entities/user.entity';
import { User } from '../../entity';
import { IFilterUserInput } from '../dtos/filter.input';

export abstract class IUserRepository {
  abstract create(input: User): Promise<UserEntity>;
  abstract update(id: String, input: User): Promise<UserEntity | null>;
  abstract findAll(filter?: IFilterUserInput): Promise<UserEntity[]>;
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract softDelete(id: string): Promise<void>;
}
