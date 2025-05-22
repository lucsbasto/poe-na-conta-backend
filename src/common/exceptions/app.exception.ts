import { HttpException } from '@nestjs/common';

export class AppException extends HttpException {
  constructor(
    name: string,
    message: string,
    statusCode: number,
    private readonly metadata?: Record<string, any>,
  ) {
    super({ name, message, metadata }, statusCode);

    this.name = name;
    this.message = message;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }
  }

  getMetadata() {
    return this.metadata;
  }
}
