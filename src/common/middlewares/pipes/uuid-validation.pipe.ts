import { BadRequestException, Injectable, type PipeTransform } from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class UUIDValidationPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value === 'string') {
      if (!isUUID(value)) {
        throw new BadRequestException('Invalid UUID format');
      }
      return value;
    }
  }
}
