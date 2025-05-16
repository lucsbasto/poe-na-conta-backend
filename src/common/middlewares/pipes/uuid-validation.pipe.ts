import { BadRequestError } from '@/common/exceptions/bad-request.error';
import { Injectable, type PipeTransform } from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class UUIDValidationPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value === 'string') {
      if (!isUUID(value)) {
        throw new BadRequestError('Invalid UUID format', { value }, true);
      }
      return value;
    }
  }
}
