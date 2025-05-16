// application/say-hello/say-hello.use-case.ts
import { Injectable } from '@nestjs/common';
import { SayHelloInput, SayHelloOutput } from '../dtos';

@Injectable()
export class SayHelloUseCase {
  execute(input: SayHelloInput): SayHelloOutput {
    const { name } = input;
    return {
      message: `Greetings, ${name}!`,
    };
  }
}
