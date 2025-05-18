import type { JSONValue } from '../types/json.type';

export abstract class ILoggerService {
  abstract idempotencyKey: string;
  abstract contextName: string;

  abstract setContext(context: string): void;

  abstract error(message: string, stackTrace?: unknown, mask?: boolean): void;

  abstract warn(message: string): void;

  abstract info(message: string): void;

  abstract debug(message: string, details?: JSONValue): void;

  abstract log(message: string): void;
}
