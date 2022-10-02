import { ISettings } from '../../../interfaces/settings/ISettings';
export interface ISettingsAdapter {
  import: (path: string) => ISettings;
  defaultSettings: () => void;
}