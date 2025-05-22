import { ISignInOutput } from '../dtos';

export const IGetMeUseCase = 'IGetMeUseCase';

export interface IGetMeUseCase {
  execute(userId: string): Promise<Omit<ISignInOutput, 'token' | 'expiresIn'>>;
}
