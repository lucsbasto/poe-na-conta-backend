import { IFilterCustomerInput } from '@/domain/customer/interfaces/dtos';
import { User } from '@/domain/user/entity';
import { IViewUserOutput } from '@/domain/user/interfaces/dtos';
import { IUserRepository } from '@/domain/user/interfaces/repository/repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(payload: User): Promise<IViewUserOutput> {
    const entity = this.repository.create(payload);
    const saved = await this.repository.save(entity);
    return saved;
  }

  async update(id: string, user: User): Promise<IViewUserOutput | null> {
    await this.repository.update(id, user);
    const updated = await this.repository.findOne({ where: { id } });
    return updated;
  }

  async findOne(id: string): Promise<IViewUserOutput | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(filter: IFilterCustomerInput): Promise<IViewUserOutput[]> {
    return this.repository.find({ where: filter });
  }

  async softDelete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
