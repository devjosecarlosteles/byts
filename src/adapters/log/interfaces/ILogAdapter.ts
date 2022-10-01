import { IGenericLog } from '../../../interfaces/IGenericLog';
export interface ILogAdapter {
  info: (args: IGenericLog) => string;
  warn: (args: IGenericLog) => string;
  error: (args: IGenericLog) => string;
}