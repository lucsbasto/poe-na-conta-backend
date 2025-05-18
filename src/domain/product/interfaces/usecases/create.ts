import { ICreateProductInput, IViewProductOutput } from "../dtos";

export abstract class ICreateProductUseCase {
  abstract execute(input: ICreateProductInput): Promise<IViewProductOutput>;
}
