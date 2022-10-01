import { IGenericLog } from '../../interfaces/IGenericLog';
export function info ({ message, settings }: IGenericLog): string {
  console.log(`[INFO] - ${ Date.now() } ${ message }`);
  return message;
}

export function warn ({ message, settings }: IGenericLog): string {
  console.log(`[INFO] - ${ Date.now() } ${ message }`);
  return message;
}

export function error ({ message, settings }: IGenericLog): string {
  console.log(`[INFO] - ${ Date.now() } ${ message }`);
  return message;
}