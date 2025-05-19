import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entity';
import { IViewUserOutput } from '../interfaces/dtos';
import { IFilterUserInput } from '../interfaces/dtos/filter.input';
import { IUserRepository } from '../interfaces/repository/repository';
import { IListAllUserUseCase } from '../interfaces/usecases/list-all';

@Injectable()
export class ListAllUserUseCase implements IListAllUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly repository: IUserRepository,
  ) {}

  async execute(filter: IFilterUserInput): Promise<IViewUserOutput[]> {
    const users = await this.repository.findAll(filter);
    return users.map((user) => new User(user).toJSON());
  }
}
