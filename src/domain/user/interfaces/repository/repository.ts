import { User } from '../../entity';
import { IViewUserOutput } from '../dtos';
import { IFilterUserInput } from '../dtos/filter.input';

export abstract class IUserRepository {
  abstract create(input: User): Promise<IViewUserOutput>;
  abstract update(id: String, input: User): Promise<IViewUserOutput | null>;
  abstract findAll(filter: IFilterUserInput): Promise<IViewUserOutput[]>;
  abstract findOne(id: string): Promise<IViewUserOutput | null>;
  abstract softDelete(id: string): Promise<void>;
}
