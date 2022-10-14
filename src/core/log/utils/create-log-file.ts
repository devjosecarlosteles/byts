import { ILogSettings } from '../../../interfaces/settings/ILogSettings';
import fs from 'fs';
import DateNow from '../../../utils/dateNow';
import TimeNow from '../../../utils/timeNow';

export function createFile(logSettings: ILogSettings, message: string) : boolean {
  const { pathLog } = logSettings;

  const outPath = pathLog ? `${ pathLog }/log${ DateNow().join("_") }_${ TimeNow().join("_") }.txt` : `${ __dirname }/logs/log${ DateNow().join("_") }_${ TimeNow().join("_") }.txt`;

  try {
    fs.writeFileSync(outPath, message);
    return true;
  } catch (_) {}

  return false;
}