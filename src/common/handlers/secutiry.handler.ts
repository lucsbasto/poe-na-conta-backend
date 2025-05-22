import type { INestApplication } from '@nestjs/common';
import type { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export function setupSecurity(app: INestApplication, configService: ConfigService): void {
  setupCors(app, configService);
  setupHelmet(app);
  setupRateLimit(app, configService);
  setupCookies(app);
}

function setupCors(app: INestApplication, configService: ConfigService): void {
  const corsEnabled = configService.get<boolean>('CORS_ENABLED') ?? false;
  if (!corsEnabled) return;

  const allowedOrigins = configService.get<string | string[]>('CORS_ORIGIN') || '*';

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
}
function setupCookies(app: INestApplication): void {
  app.use(cookieParser()); // <- importante
}

function setupHelmet(app: INestApplication): void {
  app.use(helmet());
}

function setupRateLimit(app: INestApplication, configService: ConfigService): void {
  const windowMs = configService.get<number>('RATE_LIMIT_WINDOW_MS') ?? 60_000;
  const maxRequests = configService.get<number>('RATE_LIMIT_MAX') ?? 100;

  const limiter = rateLimit({
    windowMs,
    max: maxRequests,
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use(limiter);
}
