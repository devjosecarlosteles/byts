import { createFile } from "../../core/log/utils/create-log-file";
import {ILogSettings} from "../../interfaces/settings/ILogSettings";

describe("test create log file function", () => {
  it("should return true and create a log file", () => {
    const logSettings: ILogSettings = {
      saveInFile: true,
      showInConsole: false,
      pathLog: "C:/Users/devjo/workspaces/www/byts/src/core/log/utils"
    }

    const createLogFile = createFile(logSettings, "teste");

    expect(createLogFile).toBe(true);
  });
});

