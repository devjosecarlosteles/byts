import { IEnvAdapter } from '../adapters/env/interfaces/IEnv';
import { ISettingsAdapter } from '../adapters/settings/interfaces/ISettingsAdapter';
import { Express } from 'express';

export interface IToths {
  env: IEnvAdapter;
  info: (message: string) => string;
  warn: (message: string) => string;
  error: (message: string) => string;
  settings: ISettingsAdapter;
  api: Express;
}