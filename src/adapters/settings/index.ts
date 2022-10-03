import { ISettingsAdapter } from './interfaces/ISettingsAdapter';
import { importSettingsCore, defaultSettingsCore } from '../../core/settings/index';
import fs from "fs";
import { ISettings } from '../../interfaces/settings/ISettings';

export const settingsAdapter = (useSettings?: ISettings, callback?: (cahngeState: boolean, settings: ISettings) => void) : ISettingsAdapter => {
  return {
    import: (path: string) => {
      const settingsFile = fs.readFileSync(path, { encoding: "utf-8" });
  
      const settingsFileToJson : ISettings = JSON.parse(settingsFile);
  
      const settingsCore = importSettingsCore(settingsFileToJson);

      useSettings = settingsCore;
      
      if (callback) {
        callback(true, useSettings);
      }
      
      return settingsCore;
    }, 
    defaultSettings: () => {
      const setDefaultSettings = defaultSettingsCore();
      
      if (callback) {
        callback(true, setDefaultSettings);
      }
      
      return defaultSettingsCore();
    } 
  }
}