import { v4 as uuidv4 } from 'uuid';

export class UniqueEntityID {
  static create(): string {
    return uuidv4();
  }
}
