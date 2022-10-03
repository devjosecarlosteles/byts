export interface IEnvAdapter  {
  /**
    * 
    * @param {*string} envName Nome da variável
    * @returns {*string | number | boolean} envValue - valor da variável
  */
  get: (envName: string) => string | number | boolean;
  /**
    * 
    * @param {*string} envName Nome da variável
    * @param {*string | number | boolean } envValue Nome da variável
    * @returns {*void} envValue - valor da variável
  */
  set: (envName: string, envValue: string | number | boolean) => void;
}