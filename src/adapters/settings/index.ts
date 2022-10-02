import { ISettingsAdapter } from './interfaces/ISettingsAdapter';
import { importSettingsCore, defaultSettingsCore } from '../../core/settings/index';
import fs from "fs";
import { ISettings } from '../../interfaces/settings/ISettings';

export const settingsAdapter : ISettingsAdapter = {
  import: (path: string) => {
    const settingsFile = fs.readFileSync(path, { encoding: "utf-8" });

    const settingsFileToJson : ISettings = JSON.parse(settingsFile);

    return importSettingsCore (settingsFileToJson);
  }, 
  defaultSettings: () => {
    return defaultSettingsCore();
  }
}