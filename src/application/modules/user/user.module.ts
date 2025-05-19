import { ListAllCustomerUseCase } from '@/domain/customer/usecases/list-all';
import { IUserRepository } from '@/domain/user/interfaces/repository/repository';
import { ICreateUserUseCase } from '@/domain/user/interfaces/usecases/create';
import { IListAllUserUseCase } from '@/domain/user/interfaces/usecases/list-all';
import { CreateUserUseCase } from '@/domain/user/usecases/create.usecase';
import { UserEntity } from '@/infrastructure/database/typeorm/entities/user.entity';
import { UserRepository } from '@/infrastructure/database/typeorm/repositories/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: ICreateUserUseCase,
      useClass: CreateUserUseCase,
    },
    {
      provide: IListAllUserUseCase,
      useClass: ListAllCustomerUseCase,
    },
  ],
})
export class CustomerModule {}
