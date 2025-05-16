import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './common/logger/logger.module';
import { SayHelloUseCase } from './domain/say-hello/usecases/say-hello.use-case';
import { HelloController } from './infrastructure/http/say-hello/hello.controller';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [HelloController],
  providers: [SayHelloUseCase],
})
export class MainModule {}
