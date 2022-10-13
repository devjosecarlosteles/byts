# Toths

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

## Log

Com esse módulo é possível disparar mensagens de log com aspectos diferentes das comumente usadas, como um log que já é publicado com a data atual e com o tipo de info, warn ou error.

### Info

Usado para exebir uma informação.

```ts
import toths from "toths";

toths.info("Hello World"); // [INFO] DD:MM:YYYY 00:00 - Hello World
```

### Warn

Usado para exibir um alerta.

```ts
import toths from "toths";

toths.warn("Hello World"); // [WARN] DD:MM:YYYY 00:00 - Hello World
```

### Error

Usado para exebir um erro.

```ts
import toths from "toths";

toths.error("Hello World"); // [ERROR] DD:MM:YYYY 00:00 - Hello World
```

## Settings

Configura a ferramenta de acordo com usas preferências.

### Import

crie um arquivo de configurações ``` toths-settings.json ``` esse arquivo pode conter as configurações de sua preferência, <a href="#Settings.JSON">clique aqui</a> para ver as configurações possíveis.

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>path</td>
        <td>Caminho até o arquivo de configuração</td>
      </tr>
  </tbody>
</trable>

```
import toths from "./toths";

toths.settings.import("filepath/settings.json");

```

## API

Exporta uma camada do express.

Este método já vem com a configuração de middleware necessária para trabalhar com JSON.

```ts
import toths from "toths"

const api = toths.api

api.get("/", (req, res) => {
  res.status(200).send()
})
```