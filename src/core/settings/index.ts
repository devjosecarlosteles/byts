import { ISettingsCore } from './interfaces/ISettingsCore';
import { ISettings } from '../../interfaces/settings/ISettings';

export function importSettingsCore(settings: ISettingsCore) {
  return settings;
}

export function defaultSettingsCore (): ISettings {
  const defaultSettings : ISettingsCore = {
    logSettings: {
      saveInFile: false,
      showInConsole: true
    }
  }

  return defaultSettings;
}