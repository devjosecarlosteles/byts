import { IGenericLog } from '../../interfaces/IGenericLog';
import fs from 'fs';
import { createFile } from './utils/create-log-file';

 // function should return the division of two numbers

const messageDefault = (message: string) => console.log(`[INFO] - ${ new Date()} - ${ message }`);

export function info ({ message, settings }: IGenericLog): string {
  const { logSettings } = settings;
  if (logSettings.showInConsole) {
    messageDefault(message);
  }

  if (logSettings.saveInFile) {
    createFile(logSettings, message);
  }

  return message;
}

export function warn ({ message, settings }: IGenericLog): string {
  messageDefault(message);
  return message;
}

export function error ({ message, settings }: IGenericLog): string {
  messageDefault(message);
  return message;
}