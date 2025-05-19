import { IFilterCustomerInput } from '@/domain/customer/interfaces/dtos';
import { User } from '@/domain/user/entity';
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

  async create(payload: User): Promise<UserEntity> {
    const entity = this.repository.create(payload);
    const saved = await this.repository.save(entity);
    return saved;
  }

  async update(id: string, user: User): Promise<UserEntity | null> {
    await this.repository.update(id, user);
    const updated = await this.repository.findOne({ where: { id } });
    return updated;
  }

  async findOne(id: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findAll(filter: IFilterCustomerInput): Promise<UserEntity[]> {
    return this.repository.find({ where: filter });
  }

  async softDelete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
