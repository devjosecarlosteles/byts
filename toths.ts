import { envAdapter } from "./src/adapters/env";
import { LogAdapter } from './src/adapters/log/index';
import { settingsAdapter } from './src/adapters/settings/index';
import { apiAdapter } from './src/adapters/api/index';
import { IToths } from './src/interfaces/IToths';


var useSettings = settingsAdapter().defaultSettings();

const toths: IToths = {
  env: envAdapter,
  info: (message: string) => LogAdapter.info({ message, settings: useSettings }),
  warn: (message: string) => LogAdapter.warn({ message, settings: useSettings }),
  error: (message: string) => LogAdapter.error({ message, settings: useSettings }),
  settings: settingsAdapter(useSettings, ((changeSettings, settings) => {
    changeSettings ? useSettings = settings : null;
  })),
  api: apiAdapter
}

export default toths;