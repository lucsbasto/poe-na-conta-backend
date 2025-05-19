import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { setupGlobalPipes } from './common/handlers/global-pipes.handler';
import { setupSecurity } from './common/handlers/secutiry.handler';
import { setupSwagger } from './common/handlers/swagger.handler';
import { ApiResponseInterceptor } from './common/interceptors/api-response.interceptor';
import { LoggerService } from './common/logger/logger.service';
import { MainModule } from './main.module';
dotenv.config();

async function bootstrap() {
  const appLogger = new LoggerService();

  const app = await NestFactory.create<NestExpressApplication>(MainModule, {
    logger: appLogger,
  });

  app.useGlobalInterceptors(new ApiResponseInterceptor());

  const configService = app.get(ConfigService);
  const port = configService.get<number>('HTTP_PORT') || 3000;
  const logger = await app.resolve(LoggerService);

  setupGlobalPipes(app);
  setupSwagger(app);

  setupSecurity(app, configService);

  app.setGlobalPrefix('api');

  await app.listen(port ?? 3000).then(() => {
    logger.info(`Http server listening at port: ${port}`);
  });
}
bootstrap();
