import { ISettingsCore } from './interfaces/ISettingsCore';

export function importSettingsCore(settings: ISettingsCore) {
  return settings;
}

export function defaultSettingsCore () {
  const defaultSettings : ISettingsCore = {
    logSettings: {
      saveInFile: false,
      showInConsole: true
    }
  }

  return defaultSettings;
}