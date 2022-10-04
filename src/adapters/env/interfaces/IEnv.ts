export interface IEnvAdapter  {
  /**
    * 
    * @param {*string} envName Nome da variável
    * @returns {*string} envValue - valor da variável
  */
  get: (envName: string) => string;
  /**
    * 
    * @param {*string} envName Nome da variável
    * @param {*string} envValue Nome da variável
    * @returns {*void} envValue - valor da variável
  */
  set: (envName: string, envValue: string) => void;
}