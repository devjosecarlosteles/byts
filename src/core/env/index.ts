import { IEnvGetCore, IEnvSetCore } from './interface/IEnvCore';
function envGet({ envName }: IEnvGetCore): any {
  return process.env[envName];
}

function envSet({ envName, envValue }: IEnvSetCore): void {
  process.env[envName] = envValue;
}

export { envGet, envSet };