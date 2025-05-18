import { ICreateStoreInput, IViewStoreOutput } from '../dtos';

export abstract class CreateStoreUseCase {
  abstract execute(input: ICreateStoreInput): Promise<IViewStoreOutput>;
}
