import { ICreateUserInput, IViewUserOutput } from '../dtos';

export abstract class ICreateUserUseCase {
  abstract execute(input: ICreateUserInput): Promise<IViewUserOutput>;
}
