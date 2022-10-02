import { ILogSettings } from './ILogSettings';
import { IEnvironmentsSettings } from './IEnvironmentSettings';

export interface ISettings {
  logSettings: ILogSettings; 
  envs?: IEnvironmentsSettings[];
}