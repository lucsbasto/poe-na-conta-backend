import { SayHelloUseCase } from '@/domain/say-hello/usecases/say-hello.use-case';
import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from '../hello.controller';

describe('HelloController (integration)', () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [SayHelloUseCase],
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  it('should return a greeting from controller', () => {
    const response = controller.handle('Maria');
    expect(response).toEqual({ message: 'Greetings, Maria!' });
  });
});
