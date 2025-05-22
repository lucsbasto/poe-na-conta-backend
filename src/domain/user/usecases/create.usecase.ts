import { PasswordManager } from '@/domain/common/services/password-manager';
import { UserEntity } from '@/infrastructure/database/typeorm/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entity';
import { ICreateUserInput } from '../interfaces/dtos';
import { IUserRepository } from '../interfaces/repository/repository';
import { ICreateUserUseCase } from '../interfaces/usecases/create';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly repository: IUserRepository,
  ) {}

  async execute(input: ICreateUserInput): Promise<UserEntity | null> {
    const hashedPassword = await PasswordManager.hashPassword(input.password);
    const user = new User({ ...input, password: hashedPassword });
    const createdUser = await this.repository.create(user);

    return createdUser;
  }
}
