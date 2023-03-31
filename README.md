# Full-Stack Challenge 👨‍💻

O Full-Stack Challenge consiste num desafio de criar uma aplicação Full Stack desenvolvida do 0 em 1 semana a partir da ideia de um **Cliente** ter seu CRUD junto de poder adicionar **Contatos** para si, que também devem ter seus CRUD's.

## Tópicos de conteúdo

- [Visão Geral](#visão-geral)
  - [Tecnologias utilizadas](#--tecnologias-utilizadas)
- [Front End](#front-end)
  - [Rodar a aplicação localmente](#rodar-aplicação-localmente)
    - [Instalação de dependências](#0-instalação-de-dependências)
    - [Executar aplicação](#01-executar-aplicação)
- [Back End](#back-end)
  - [Rodar o servidor localmente](#rodar-o-servidor-localmente)
    - [Instalação de dependências](#1-instalação-de-dependências)
    - [Criando variáveis de ambiente](#11-criando-variáveis-de-ambiente)
    - [Executar as migrações](#12-migrations)
    - [Executar servidor](#13-executar-servidor)
  - [Endpoints](#endpoints)

## Visão Geral

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

### - Tecnologias utilizadas

- Front End:

|                                                           |                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------ |
| [Chakara UI](https://chakra-ui.com)                       | [Emotion](https://emotion.sh/docs/introduction)                    |
| [TypeScript](https://www.typescriptlang.org/)             | [React Hook Form](https://react-hook-form.com)                     |
| [NodeJS](https://nodejs.org/en/docs/)                     | [NextJs](https://nextjs.org)                                       |
| [Pdfmake](http://pdfmake.org/#/)                          | [React-input-mask](https://www.npmjs.com/package/react-input-mask) |
| [Axios](https://axios-http.com/ptbr/docs/intro)           | [Framer Motion](https://www.framer.com/motion/)                    |
| [Nookies](https://www.npmjs.com/package/nookies)          | [Yup](https://www.npmjs.com/package/yup)                           |
| [React-icons](https://react-icons.github.io/react-icons/) | [Lottie-react](https://www.npmjs.com/package/lottie-react)         |

- Back End:

|                                                      |                                                                            |
| ---------------------------------------------------- | -------------------------------------------------------------------------- |
| [NodeJS](https://nodejs.org/en/docs/)                | [TS-jest](https://www.npmjs.com/package/ts-jest)                           |
| [TypeScript](https://www.typescriptlang.org/)        | [Supertest](https://www.npmjs.com/package/supertest)                       |
| [TypeORM](https://typeorm.io/)                       | [PostgresSQL](https://www.postgresql.org)                                  |
| [Express](https://expressjs.com/)                    | [Jest](https://jestjs.io/pt-BR/)                                           |
| [BcryptJS](https://www.npmjs.com/package/bcryptjs)   | [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata)         |
| [Uuid](https://www.npmjs.com/package/uuid)           | [Pg](https://www.npmjs.com/package/pg)                                     |
| [Cross-env](https://www.npmjs.com/package/cross-env) | [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)                 |
| [Dotenv](https://www.npmjs.com/package/dotenv)       | [Express-async-errors](https://www.npmjs.com/package/express-async-errors) |
| [Zod](https://www.npmjs.com/package/zod)             | [TS-node](https://www.npmjs.com/package/ts-node)                           |

## **Front End**

## Rodar aplicação localmente

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

<h4 align="center"><strong>🚨 Importante 🚨</strong></h4>

Após clonar o repositório, no seu terminal entre na pasta **/front**. Caso esteja na pasta raiz do projeto, dentro do terminal utilize:

```bash
cd front/
```

### 0. Instalação de dependências

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Para instalação utilize os seguintes comandos em seu terminal:

```bash
yarn
```

Ou (<span style="color:#11a56e;">Recomendado</span>)

```bash
npm install
```

### 0.1. Executar aplicação

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Com tudo instalado, falta somente executar a aplicação bastando executar o comando:

```bash
yarn dev
```

Ou

```bash
npm run dev
```

---

## **Back End**

## Rodar o servidor localmente

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

<h4 align="center"><strong>🚨 Importante 🚨</strong></h4>

Abra um novo terminal e no terminal entre na pasta **/back**. Caso esteja na pasta raiz do projeto, dentro do terminal utilize:

```bash
cd back/
```

### 1. Instalação de dependências

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Para instalação utilize os seguintes comandos em seu terminal:

```bash
yarn
```

Ou

```bash
npm install
```

### 1.1. Criando variáveis de ambiente

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Também é preciso configurar as váriaveis de ambiente, crie um arquivo **.env** com base no **.env.example**, o seguinte comando pode auxiliar:

```bash
cp .env.example .env
```

E então configure da acordo com o necessário suas váriaveis.

### 1.2. Migrations

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Com a variáveis configuradas, execute as migrations para a montagem das tabelas com o comando:

```bash
yarn typeorm migration:run -- -d src/data-source.ts
```

Ou

```bash
npm run typeorm migration:run -- -d src/data-source.ts
```

OBS: Erros podem ocorrer por conta de incompatibilidade da versão do **typeorm** utilizada e o seu **Sistema Operacional**. Caso ocorram tente adequar para a versão mais estável recomendada em relação do seu **OS**.

### 1.3. Executar servidor

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Com tudo configurado, falta somente rodar o servidor bastando executar o comando:

```bash
yarn dev
```

Ou

```bash
npm run dev
```

---

## Endpoints

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

### Índice

- [Session](#1-session)
  - [Login de clientes](#11-login-de-clientes---login---post)
- [Clientes](#2-clientes)
  - [Criar cliente](#21-criar-cliente---client---post)
  - [Informações do cliente logado](#22-informações-do-cliente-logado---client---get)
  - [Atualização dos dados do cliente](#23-atualizar-dados-do-cliente---clientclient_id---patch)
  - [Deletar dados do cliente](#23-deletar-dados-do-cliente---clientclient_id---delete)
- [Contatos](#3-contatos)
  - [Adicionar contato a um cliente](#31-adicionar-contato---contact---post)
  - [Informações de um contato do cliente logado](#32-informações-de-um-contato---contactcontact_id---get)
  - [Listar contatos do cliente logado](#33-listar-contatos---contact---get)
  - [Atualizar dados de um contato do cliente logado](#atualizar-dados-de-um-contato---contactcontact_id---patch)
  - [Deletar contato do cliente logado](#deletar-contato---contactcontact_id---delete)

---

<h4 align="center"><strong>🚨 Importante 🚨</strong></h4>

As rotas autenticadas (🔐) necessitam da adição de um token no cabeçalho da requisição do tipo "Bearer token". Caso não seja fornecido, será enviado um erro como:

- ❌ Resposta (Unauthorized) - status: 401

```json
{
  "message": "Missing bearer token"
}
```

As rotas que necessitam de **id** ex: "client/**client_id**" devem receber o id no formato **UUID**. Caso não seja fornecido nesse formato, será enviado um erro como:

- ❌ Resposta (Bad Request) - status: 400

```json
{
  "message": "Invalid uuid"
}
```

A manipulação de dados através dos métodos **PATCH/DELETE** nas rotas dos **clientes ("/client")** somente pode ocorrer pelo dono daqueles dados. Caso tente atualizar/deletar dados de um cliente diferente do que está logado será enviado um erro como:

- ❌ Resposta (Forbidden) - status: 403

```json
{
  "message": "You do not have permission to perform this action"
}
```

---

## 1. Session

[Retornar aos Endpoints - 🔙](#endpoints)

### Rotas

| Método | Rota   | Descrição                |
| ------ | ------ | ------------------------ |
| POST   | /login | Login de um **cliente**. |

### 1.1. Login de clientes - ("/login") - POST

[Retornar aos Endpoints - 🔙](#endpoints)

- Dados de envio:

```json
{
  "email": "cliente@gmail.com",
  "password": "Senha123!"
}
```

- ✅ Resposta (OK) - status: 200

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoxLCJhZG0iO..."
}
```

- ❌ Resposta (Unauthorized) - status: 401 - no caso de email e/ou senha incorretos.

```json
{
  "message": "Invalid credentials"
}
```

## 2. Clientes

[Retornar aos Endpoints - 🔙](#endpoints)

- Informações da DataBase:

| Campo     | Tipo   | Descrição                                 |
| --------- | ------ | ----------------------------------------- |
| id        | string | Identificador único do cliente.           |
| name      | string | O nome do cliente.                        |
| email     | string | O e-mail do cliente.                      |
| password  | string | A senha de acesso do cliente.             |
| tel       | string | O número de telefone do cliente.          |
| createdAt | date   | Data indicando quando a conta foi criada. |

### Rotas

| Método | Rota                    | Descrição                           |
| ------ | ----------------------- | ----------------------------------- |
| POST   | /client                 | Cadastro de um cliente.             |
| GET    | /cliente                | Retorna os dados do cliente logado. |
| PATCH  | /cliente/**:client_id** | Atualiza os dados de um cliente.    |
| DELETE | /cliente/**:client_id** | Deleta um cliente.                  |

### 2.1. Criar cliente - ("/client") - POST

[Retornar aos Endpoints - 🔙](#endpoints)

- Dados de envio:

```json
{
  "name": "cliente",
  "email": "cliente@gmail.com",
  "password": "Senha123!",
  "tel": "5500912345678"
}
```

- ✅ Resposta (Created) - status: 201

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "name": "cliente",
  "email": "cliente@gmail.com",
  "tel": "5500912345678",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Resposta (Conflict) - status 409 - caso já haja algum cliente cadastrado com esse email/tel.

```json
{
  "message": "A client with this email/tel already exists"
}
```

### 2.2. Informações do cliente logado - ("/client") - GET

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "name": "cliente",
  "email": "cliente@gmail.com",
  "tel": "5500912345678",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

### 2.3. Atualizar dados do cliente - ("/client/**:client_id**") - PATCH

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

| Campo editável | Tipo   | Descrição                                 |
| -------------- | ------ | ----------------------------------------- |
| name           | string | Atualiza o nome do cliente.               |
| email          | string | Atualiza o e-mail do cliente.             |
| password       | string | Atualiza a senha do cliente.              |
| tel            | string | atualiza o numero de telefone do cliente. |

- Dados de envio:

```json
{
  "name": "cliente ATUALIZADO",
  "email": "clienteatualizado@gmail.com",
  "password": "Senha321!",
  "tel": "5500912345610"
}
```

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "name": "cliente ATUALIZADO",
  "email": "clienteatualizado@gmail.com",
  "tel": "5500912345610",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Resposta (Conflict) - status: 409 - caso o email/tel a se atualizar já pertencer a outro cliente.

```json
{
  "message": "A client with this email/tel already exists"
}
```

### 2.3. Deletar dados do cliente - ("/client/**:client_id**") - DELETE

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (No content) - status: 204 - **No content**

---

## 3. Contatos

[Retornar aos Endpoints - 🔙](#endpoints)

- Informações da DataBase:

| Campo     | Tipo   | Descrição                                 |
| --------- | ------ | ----------------------------------------- |
| id        | string | Identificador único do contato.           |
| name      | string | O nome do contato.                        |
| email     | string | O e-mail do contato.                      |
| tel       | string | O número de telefone do contato.          |
| createdAt | date   | Data indicando quando a conta foi criada. |

### Rotas

| Método | Rota                     | Descrição                                          |
| ------ | ------------------------ | -------------------------------------------------- |
| POST   | /contact                 | Cadastro de um contato.                            |
| GET    | /contact                 | Listagem dos contatos do cliente logado.           |
| GET    | /contact/**:contact_id** | Informação de um contato do cliente logado.        |
| PATCH  | /contact/**:contact_id** | Atualiza os dados de um contato do cliente logado. |
| DELETE | /contact/**:contact_id** | Deleta um contato do cliente logado.               |

### 3.1. Adicionar contato - ("/contact") - POST

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- Dados de envio:

```json
{
  "name": "contact",
  "email": "contact@gmail.com",
  "tel": "5500911345678"
}
```

- ✅ Resposta (Created) - status: 201

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "name": "contact",
  "email": "contact@gmail.com",
  "tel": "5500911345678",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Resposta (Conflict) - status: 409 - caso ja exista um contato com essa combinação de email e tel.

```json
{
  "message": "A contact with this tel number and email has already added"
}
```

- ❌ Resposta (Conflict) - status: 409 - caso tente adicionar um contato com o email/tel do cliente.

```json
{
  "message": "This email and/or tel number are yours"
}
```

### 3.2. Informações de um contato - ("/contact/**contact_id**") - GET

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "name": "contact",
  "email": "contact@gmail.com",
  "tel": "5500911345678",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Resposta (Not Found) - status: 404 - caso procure um contato que não seja **do cliente logado**.

```json
{
  "message": "Not found"
}
```

### 3.3 Listar contatos - ("/contact") - GET

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (OK) - status: 200

```json
[
  {
    "id": "196240cb-f907-411e-b4a6-8864c79837fa",
    "name": "contact",
    "email": "contact@gmail.com",
    "tel": "5500911345678",
    "createdAt": "2023-03-24T18:12:31.922Z"
  },
  ...
]

```

### Atualizar dados de um contato - ("/contact/**contact_id**") - PATCH

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

| Campo editável | Tipo   | Descrição                                 |
| -------------- | ------ | ----------------------------------------- |
| name           | string | Atualiza o nome do contato.               |
| email          | string | Atualiza o e-mail do contato.             |
| tel            | string | atualiza o numero de telefone do contato. |

- Dados de envio:

```json
{
  "name": "contact Atualizado",
  "email": "contactatualizado@gmail.com",
  "tel": "5500911345677"
}
```

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "name": "contact Atualizado",
  "email": "contactatualizado@gmail.com",
  "tel": "5500911345677",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Resposta (Conflict) - status: 409 - caso ja exista um contato com essa combinação de email e tel.

```json
{
  "message": "A contact with this tel number and email has already added"
}
```

### Deletar contato - ("/contact/**contact_id**") - DELETE

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (No Content) - status: 204 - **No content**

---
