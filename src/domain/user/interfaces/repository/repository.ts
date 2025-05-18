import {
  ICreateUserInput,
  IUpdateUserInput,
  IViewUserOutput,
} from '../dtos';

export interface IUserRepository {
  create(input: ICreateUserInput): Promise<IViewUserOutput>;
  update(input: IUpdateUserInput): Promise<IViewUserOutput>;
  findAll(): Promise<IViewUserOutput[]>;
  findOne(id: string): Promise<IViewUserOutput | null>;
  softDelete(id: string): Promise<void>;
}
