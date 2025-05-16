import { InvalidSchema } from '@/common/exceptions/invalid-schema.exception';
import { type ValidationError, ValidationPipe, type ValidationPipeOptions } from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: Omit<ValidationPipeOptions, 'exceptionFactory' | 'errorHttpStatusCode'>) {
    super({
      ...options,
      exceptionFactory: CustomValidationPipe.buildException,
    });
  }

  private static buildException(errors: ValidationError[]): InvalidSchema {
    const flatErrors = CustomValidationPipe.flattenErrors(errors);
    return new InvalidSchema(
      'body',
      flatErrors,
      undefined,
      'Validation failed for provided data. Check the details in the metadata field.',
    );
  }

  private static flattenErrors(errors: ValidationError[]): string[] {
    const messages: string[] = [];

    for (const error of errors) {
      if (error.constraints) {
        messages.push(...Object.values(error.constraints));
      }

      if (error.children?.length) {
        messages.push(...CustomValidationPipe.flattenErrors(error.children));
      }
    }

    return messages;
  }
}
