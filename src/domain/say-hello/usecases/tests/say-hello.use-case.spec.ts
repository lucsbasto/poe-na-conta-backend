import { SayHelloUseCase } from '../say-hello.use-case';

describe('SayHelloUseCase', () => {
  let useCase: SayHelloUseCase;

  beforeEach(() => {
    useCase = new SayHelloUseCase();
  });

  it('should return a greeting message', () => {
    const result = useCase.execute({ name: 'João' });
    expect(result.message).toBe('Greetings, João!');
  });
});
