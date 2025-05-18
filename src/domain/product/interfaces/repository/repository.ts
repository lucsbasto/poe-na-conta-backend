import {
  ICreateProductInput,
  IUpdateProductInput,
  IViewProductOutput,
} from '../dtos';

export interface IProductRepository {
  create(input: ICreateProductInput): Promise<IViewProductOutput>;
  update(input: IUpdateProductInput): Promise<IViewProductOutput>;
  findAll(): Promise<IViewProductOutput[]>;
  findOne(id: string): Promise<IViewProductOutput | null>;
  softDelete(id: string): Promise<void>;
}
