import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, LoggerService } from '@nestjs/common';
import { Response } from 'express';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception instanceof Error ? exception.stack : JSON.stringify(exception);

    this.logger.error(`Erro: ${message}`);

    response.status(status).json({
      statusCode: status,
      message: exception instanceof HttpException ? exception.getResponse() : 'Erro interno no servidor',
    });
  }
}
