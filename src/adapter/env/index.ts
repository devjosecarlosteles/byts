import { envGet, envSet } from "../../core/env";
import { IEnvAdapter } from "./interfaces/IEnv";

const envAdapter: IEnvAdapter = {
  get: (envName) => envGet({ envName }),
  set: (envName) => envSet({ envName })    
}

export { envAdapter };