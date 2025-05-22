import { HttpStatus } from '@nestjs/common';
import { AppException } from './app.exception';

export class ApiError extends AppException {
  constructor(message: string, metadata?: Record<string, any>) {
    super('ApiError', message, HttpStatus.INTERNAL_SERVER_ERROR, metadata);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }
  }
}
