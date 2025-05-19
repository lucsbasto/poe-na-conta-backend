import { ISignInInput, ISignInOutput } from '../dtos';

export abstract class ISignInUseCase {
  abstract execute(input: ISignInInput): Promise<ISignInOutput>;
}
