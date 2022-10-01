import { ILogAdapter } from './interfaces/ILogAdapter';
import { IGenericLog } from '../../interfaces/IGenericLog';
import { info, warn, error } from '../../core/log/index';

export const LogAdapter: ILogAdapter = {
  info: ({ message, settings }: IGenericLog) => info({ message, settings: "" }),
  warn: ({ message, settings }: IGenericLog) => warn({ message, settings: "" }),
  error: ({ message, settings }: IGenericLog) => error({ message, settings: "" }),
}