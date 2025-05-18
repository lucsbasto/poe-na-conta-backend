import {
  CreateProductInput,
  UpdateProductInput,
  ViewProductOutput,
} from '../dtos';

export interface ProductRepository {
  create(input: CreateProductInput): Promise<ViewProductOutput>;
  update(input: UpdateProductInput): Promise<ViewProductOutput>;
  findAll(): Promise<ViewProductOutput[]>;
  findOne(id: string): Promise<ViewProductOutput | null>;
  softDelete(id: string): Promise<void>;
}
