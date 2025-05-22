import type { INestApplication } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { AllExceptionsFilter } from '../middlewares/filters/all-exceptions.filter';

export async function setupGlobalFilters(app: INestApplication): Promise<INestApplication> {
  const logger = await app.resolve(LoggerService);

  const allExceptionsFilter = new AllExceptionsFilter(logger);

  app.useGlobalFilters(allExceptionsFilter);

  return app;
}
