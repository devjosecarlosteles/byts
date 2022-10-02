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
})