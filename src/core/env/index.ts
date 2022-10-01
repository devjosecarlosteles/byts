import { IEnvGetCore, IEnvSetCore } from './interface/IEnvCore';

import messagesOfErrors from "../../errors/env.json";

function envGet({ envName }: IEnvGetCore): any {
  return process.env[envName];
}

function envSet({ envName, envValue }: IEnvSetCore): void {
  if (envName.trim().length === 0) throw new Error(messagesOfErrors.emptyString);

  process.env[envName] = envValue;
}

export { envGet, envSet };