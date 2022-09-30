import { IEnv } from './interface/IEnvCore';
function envGet({ envName }: IEnv): any {
  return process.env[envName];
}

function envSet({ envName }: IEnv): void {}

export { envGet, envSet };