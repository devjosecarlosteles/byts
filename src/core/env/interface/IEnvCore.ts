export interface IEnvGetCore {
  envName: string;
}

export interface IEnvSetCore extends IEnvGetCore {
  envValue: string | number | boolean;
}