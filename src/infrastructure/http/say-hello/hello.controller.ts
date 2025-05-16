import { SayHelloUseCase } from '@/domain/say-hello/usecases/say-hello.use-case';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  constructor(private readonly sayHello: SayHelloUseCase) {}

  @Get()
  handle(@Query('name') name: string) {
    return this.sayHello.execute({ name });
  }
}
