import { PasswordManager } from '@/domain/common/services/password-manager';
import { User } from '@/domain/user/entity';
import { IUserRepository } from '@/domain/user/interfaces/repository/repository';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ISignInInput, ISignInOutput } from '../interfaces/dtos';
import { ISignInUseCase } from '../interfaces/usecases/sign-in';

@Injectable()
export class SignInUseCase implements ISignInUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly repository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(input: ISignInInput): Promise<ISignInOutput> {
    const user = await this.repository.findByEmail(input.email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (!user.isActive) {
      throw new Error('Usuário bloqueado');
    }

    const isPasswordValid = await PasswordManager.comparePassword(input.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Senha inválida');
    }

    return await this.generateToken(new User(user));
  }

  async generateToken(user: any): Promise<ISignInOutput> {
    const payload = { sub: user.id, email: user.email, name: user.name, role: user.role, customerId: user.customerId };
    const token = this.jwtService.sign(payload);
    return {
      token,
      expiresIn: process.env.JWT_EXPIRES_IN || '30d',
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
