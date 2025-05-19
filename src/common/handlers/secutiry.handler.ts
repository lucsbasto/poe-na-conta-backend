import type { ConfigService } from '@nestjs/config';
import type { NestExpressApplication } from '@nestjs/platform-express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export function setupSecurity(app: NestExpressApplication, configService: ConfigService): void {
  setupCors(app, configService);
  setupHelmet(app);
  setupRateLimiting(app, configService);
}

function setupCors(app: NestExpressApplication, configService: ConfigService): void {
  const corsEnabled = configService.get<boolean>('CORS_ENABLED') ?? false;

  if (!corsEnabled) return;

  const allowedOrigins = configService.get<string | string[]>('CORS_ORIGIN') || '*';

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
}

function setupHelmet(app: NestExpressApplication): void {
  app.use(helmet());
}

function setupRateLimiting(app: NestExpressApplication, configService: ConfigService): void {
  const windowMs = configService.get<number>('RATE_LIMIT_WINDOW_MS') ?? 60_000;
  const maxRequests = configService.get<number>('RATE_LIMIT_MAX') ?? 100;

  app.use(
    rateLimit({
      windowMs,
      max: maxRequests,
      message: 'Too many requests from this IP, please try again after a minute.',
    }),
  );
}
