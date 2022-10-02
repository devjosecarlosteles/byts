import { envAdapter } from "./src/adapters/env";
import { LogAdapter } from './src/adapters/log/index';
import { settingsAdapter } from './src/adapters/settings/index';

const toths = {
  env: envAdapter,
  info: (message: string) => LogAdapter.info({ message, settings: "" }),
  warn: (message: string) => LogAdapter.warn({ message, settings: "" }),
  error: (message: string) => LogAdapter.error({ message, settings: "" }),
  settings: settingsAdapter
}

export default toths;