import toths from "../../../toths";
import { ISettings } from '../../interfaces/settings/ISettings';

describe("testing settings module", () => {
  it("should test default settings", () => {
    const defaultSettings : ISettings = {
      logSettings: {
        saveInFile: false,
        showInConsole: true
      }
    }

    expect(toths.settings.defaultSettings()).toStrictEqual(defaultSettings);
  });

  it("should test import settings", () => {
    const expectSettings : ISettings = {
      logSettings: {
        saveInFile: true,
        showInConsole: false
      }
    }

    const path = "C:/Users/devjo/workspaces/www/byts/src/__tests__/settings/settings.json"

    expect(toths.settings.import(path)).toStrictEqual(expectSettings);
  });
})