import { ISignInOutput } from '@/domain/authentication/interfaces/dtos';
import { IGetMeUseCase } from '@/domain/authentication/interfaces/usecases/get-me';
import { IUserRepository } from '@/domain/user/interfaces/repository/repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetMeUseCase implements IGetMeUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<Omit<ISignInOutput, 'token' | 'expiresIn'>> {
    const user = await this.userRepository.findById(userId);
    if (!user || !user.isActive) {
      throw new Error('Usuário inválido ou inativo');
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        customerId: user.customerId,
      },
    };
  }
}
