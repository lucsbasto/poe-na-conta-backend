import { ICustomerRepository } from '@/domain/customer/interfaces/repositories/repository';
import { ICreateCustomerUseCase } from '@/domain/customer/interfaces/usecases';
import { IListAllCustomerUseCase } from '@/domain/customer/interfaces/usecases/list-all';
import { CreateCustomerUseCase } from '@/domain/customer/usecases/create';
import { ListAllCustomerUseCase } from '@/domain/customer/usecases/list-all';
import { CustomerEntity } from '@/infrastructure/database/typeorm/entities/customer.entity';
import { CustomerRepository } from '@/infrastructure/database/typeorm/repositories/customer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './api/controllers/customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CustomerController],
  providers: [
    {
      provide: ICustomerRepository,
      useClass: CustomerRepository,
    },
    {
      provide: ICreateCustomerUseCase,
      useClass: CreateCustomerUseCase,
    },
    {
      provide: IListAllCustomerUseCase,
      useClass: ListAllCustomerUseCase,
    },
  ],
})
export class CustomerModule {}
