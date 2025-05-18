import { ICreateUserInput, IViewUserOutput } from '../dtos';

export abstract class CreateUserUseCase {
  abstract execute(input: ICreateUserInput): Promise<IViewUserOutput>;
}
