// src/main.ts
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import crypto from 'crypto';
import { setupGlobalPipes } from './common/handlers/global-pipes.handler';
import { setupSecurity } from './common/handlers/secutiry.handler';
import { setupSwagger } from './common/handlers/swagger.handler';
import { ApiResponseInterceptor } from './common/interceptors/api-response.interceptor';
import { LoggerService } from './common/logger/logger.service';
import { MainModule } from './main.module';
// @ts-ignore
global.crypto = crypto;

// Fastify instance não é usada diretamente mais
let app: NestFastifyApplication;

async function bootstrap() {
  const appLogger = new LoggerService();

  app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter(), { logger: appLogger });

  app.useGlobalInterceptors(new ApiResponseInterceptor());

  const configService = app.get(ConfigService);
  const port = configService.get<number>('HTTP_PORT') || 3000;
  const logger = await app.resolve(LoggerService);

  setupGlobalPipes(app);
  setupSwagger(app);
  setupSecurity(app, configService);

  app.setGlobalPrefix('api');

  await app.init(); // ⚠️ Não use app.listen() no Vercel

  logger.info(`NestJS app initialized on port ${port}`);
}

bootstrap();

// ⚠️ Esta é a parte fundamental para o Vercel funcionar
module.exports = async (req: any, res: any) => {
  if (!app) {
    await bootstrap();
  }

  await app.init(); // garante que o app está pronto
  app.getHttpAdapter().getHttpServer()(req, res); // proxy do handler fastify
};
