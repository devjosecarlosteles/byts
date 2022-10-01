export interface IEnvAdapter  {
  get: (envName: string) => any;
  set: (envName: string, envValue: string) => void;
}