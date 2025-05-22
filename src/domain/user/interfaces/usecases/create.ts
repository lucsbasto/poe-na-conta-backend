import { UserEntity } from '@/infrastructure/database/typeorm/entities/user.entity';
import { ICreateUserInput } from '../dtos';

export abstract class ICreateUserUseCase {
  abstract execute(input: ICreateUserInput): Promise<UserEntity | null>;
}
