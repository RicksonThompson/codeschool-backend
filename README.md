<h3 align="center">
  Code School: Plataforma de Cursos
</h3>

## :rocket: Sobre o projeto

Nesse projeto foi desenvolvido uma api e uma página web em NodeJS e ReactJS respectivamente. Objetivo do projeto CodeSchool é permitir que as pessoas criem seus módulos e aulas e possam assistir a partir de player do YouTube integrado ao site.

Essa aplicação Cria, Lista, Atualiza e Deleta usuários, módulos e aulas. Também é possível a realização do login utilizando autenticação via JWT.

### Instalação e execução do sistema

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

Tendo o repositório clonado e instalado as dependências, altere os seguintes caminhos para executar localmente:

```javascript
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "root",
  "password": "",
  "database": "code_school",
  "entities": [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
  }
```

:runner: Após criar um banco local com o nome informado acima, execute o seguinte comando para rodar as migrations no banco de dados:

```json
yarn typeorm migration:run
```

⚠️ Antes de rodar as migrations, crie um banco de dados faça o apontamento dele no arquivo `ormconfig.js`para que possa vizualizar a criação das tabelas ⚠️

Por fim, execute o seguinte comando para iniciar a aplicação localment:

```json
yarn dev:server
```

Prontinho, agora é só "testar"!:computer:

Abaixo listei as rotas,  e os parâmetros e os comportamentos de cada uma delas.

Recomendo a utilização do [Insomnia](https://insomnia.rest/download) para fazer as requisições.

### Rotas da aplicação

Agora que você já está com o código clonado e pronto para continuar, você pode verificar o funcionamento das rotas:

- **`get /users`**: Retornar todos os usuários cadastrados na aplicação

```json
[
  {
    "id": 2,
    "name": "Dev",
    "email": "dev@codeschool.com",
    "password": "$2a$08$x5UufTnS4IXxTZpDjywxUuXh49nKxt5GAy4mdHqILxnkbqCe9H4eC",
    "created_at": "2021-05-11T03:16:17.539Z",
    "updated_at": "2021-05-11T05:47:41.116Z"
  },
      {
    "id": 2,
    "name": "Rickson",
    "email": "rickson@codeschool.com",
    "password": "$2a$08$x5UufTnS4IXxTZpDjywxUuXh49nKxt5GAy4mdHqILxnkbqCe9H4eC",
    "created_at": "2021-05-11T03:16:17.539Z",
    "updated_at": "2021-05-11T05:47:41.116Z"
  }
]
```

- **`post /user`**: A rota deve receber os seguintes parâmetros:

  ```json
  {
  	"name": "Gab",
  	"email": "gab@codeschool.com",
  	"password": "1234"
  }
  ```

  E retornar as seguintes informações:

    ```json
    {
      "id": 6,
      "name": "Gab",
      "email": "gab@codeschool.com",
      "created_at": "2021-05-12T02:23:18.601Z",
      "updated_at": "2021-05-12T02:23:18.601Z"
    }
    ```

- **`delete /users/:id`**: A rota deve deletar um user com o `id` presente nos parâmetros da rota;

**Módulos**

- **`get /modules`**: A rota deve retornar todos os módulos de aulas cadastrados no banco de dados.

```json
[
  {
    "id": 5,
    "title": "ReactJS",
    "description": "Domine ReactJS em 3 meses.",
    "created_at": "2021-05-11T07:20:23.361Z",
    "updated_at": "2021-05-11T07:20:23.361Z"
  },
  {
    "id": 6,
    "title": "Dominando o Photoshop",
    "description": "Aprenda mais sobre Photoshop",
    "created_at": "2021-05-11T08:08:06.415Z",
    "updated_at": "2021-05-11T08:08:06.415Z"
  }
]
```

- **`post /modules`**: A rota deve receber os seguintes parâmetros:

  ```json
  {
  	"title": "Aprenda o NodeJS",
  	"description": "Desenvolva APIs Rest"
  }
  ```

  Então retorna um módulo criado com as seguintes informações:

  ```json
  {
    "title": "Aprenda o NodeJS",
    "description": "Desenvolva APIs Rest",
    "id": 16,
    "created_at": "2021-05-14T00:33:26.964Z",
    "updated_at": "2021-05-14T00:33:26.964Z"
  }
  ```

- **`update /modules`:** Dado os parâmetros:

  ```json
  {
  	"id": 16,
  	"title": "Novo título",
  	"description": "Nova descrição"
  }
  ```

  A rota deve retornar o módulos com as informações atualizadas:

  ```json
  {
    "id": 16,
    "title": "Novo título",
    "description": "Nova descrição",
    "created_at": "2021-05-14T00:33:26.964Z",
    "updated_at": "2021-05-14T00:36:24.877Z"
  }
  ```

- **`delete /modules/:id`**: A rota deve deletar um módulo baseado no `id` presente nos parâmetros da rota;

**Aulas**

- **`get /lessons`**: A rota deve retornar todas as aulas cadastradas no db.

```json
[
  {
    "id": 8,
    "title": "How to use NodeJS",
    "description": "Nesse tutorial iremos pra aprender utilizar o NodeJS a nivel hardcore",
    "link": "http://localhost:3333",
    "module_id": 2,
    "created_at": "2021-05-11T08:58:29.204Z",
    "updated_at": "2021-05-11T08:58:29.204Z",
    "module": {
      "id": 2,
      "title": "NodeJS",
      "description": "test",
      "created_at": "2021-05-10T02:23:34.278Z",
      "updated_at": "2021-05-12T02:39:37.773Z"
    }
  }
]
```

- **`post /lessons`**: A rota deve receber os seguintes parâmetros:

  ```json
  {
  	"title": "How to use NodeJS",
  	"description": "Nesse tutorial iremos pra aprender utilizar o NodeJS a nivel hardcore",
  	"link": "http://localhost:3333",
  	"module_id": 2
  }
  ```

  Então retorna uma aula criada com as seguintes informações:

  ```json
  {
    "title": "How to use NodeJS",
    "description": "Nesse tutorial iremos pra aprender utilizar o NodeJS a nivel hardcore",
    "link": "http://localhost:3333",
    "module_id": 2,
    "id": 10,
    "created_at": "2021-05-12T03:00:15.614Z",
    "updated_at": "2021-05-12T03:00:15.614Z"
  }
  ```

- **`update /lessons`:** Dado os parâmetros:

  ```json
  {
  	"id": 10,
  	"title": "React Native avançado",
  	"description": "Indo para o próximo nível com RN",
  	"link": "http://localhost:3333",
  	"module_id": 2
  }
  ```

  A rota deve retornar a aula com as informações atualizadas:

  ```json
  {
    "id": 10,
    "title": "React Native avançado",
    "description": "Indo para o próximo nível com RN",
    "link": "http://localhost:3333",
    "module_id": 2,
    "created_at": "2021-05-12T03:00:15.614Z",
    "updated_at": "2021-05-14T00:43:36.263Z",
    "module": {
      "id": 2,
      "title": "Graphhhhh",
      "description": "test",
      "created_at": "2021-05-10T02:23:34.278Z",
      "updated_at": "2021-05-12T02:39:37.773Z"
    }
  }
  ```

- **`delete /lessons/:id`**: A rota deve deletar uma aula baseado no `id` presente nos parâmetros da rota;

## :calendar: Entrega

Código fonte disponibilizado por meio desse repositório na data 16/05/2021

---

Feito com :heart: by Rickson Thompson
