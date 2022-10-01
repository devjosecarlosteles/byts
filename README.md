# BYts

Ferramenta de desenvolvimento produtivo para Javascript e Typescript.

## Env 

Módulo responsável por realizar busca e criar variáveis de ambiente.

### set

set (envName: string, envValue: any): void;

seta uma variável de ambiente no sistema.


```ts
  import byts from "byts";

  byts.env.set("ACCESS_TOKEN", "eyJhbGciOiJIUzI1NiIsIm1lc3NhZ2UiO...");
```

### get

retorna o valor presente em uma variável de ambiente.

get (envName: string): any;

```ts
  import byts from "byts";

  byts.env.get("ACCESS_TOKEN"); // eyJhbGciOiJIUzI1NiIsIm1lc3NhZ2UiO...
```