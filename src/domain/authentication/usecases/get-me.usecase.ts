import { IGetMeUseCase } from '@/domain/authentication/interfaces/usecases/get-me';
import { RoleEnum } from '@/domain/common/enums/role';
import { IUserRepository } from '@/domain/user/interfaces/repository/repository';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type GetCurrentUserOutput = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: RoleEnum;
    customerId: string;
  };
}

@Injectable()
export class GetMeUseCase implements IGetMeUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(userId: string): Promise<GetCurrentUserOutput> {
    const user = await this.userRepository.findById(userId);
    if (!user || !user.isActive) {
      throw new Error('Usuário inválido ou inativo');
    }
    const token = await this.generateToken(user);
    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        customerId: user.customerId,
      },
    };
  }


  async generateToken(user: any): Promise<string> {
    const payload = { sub: user.id, email: user.email, name: user.name, role: user.role, customerId: user.customerId };
    const token = this.jwtService.sign(payload);
    return token;
  }
}
