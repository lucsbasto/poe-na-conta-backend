import { IGetMeUseCase } from '@/domain/authentication/interfaces/usecases/get-me';
import { ISignInUseCase } from '@/domain/authentication/interfaces/usecases/sign-in';
import { SignInUseCase } from '@/domain/authentication/usecases/create.usecase';
import { GetMeUseCase } from '@/domain/authentication/usecases/get-me.usecase';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './api/controller/authentication.controller';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    {
      provide: ISignInUseCase,
      useClass: SignInUseCase,
    },
    {
      provide: IGetMeUseCase,
      useClass: GetMeUseCase,
    },
  ],
  exports: [JwtStrategy],
})
export class AuthModule {}
