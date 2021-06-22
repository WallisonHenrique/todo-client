# Instalação
## Todos API
Baixe a Todos API e execute localmente com o comando `docker-compose up -d` conforme a [doc](https://github.com/balliegojr/todo-api).

## Todo Client
Clone o repositório Todo-client para sua máquina. Abra o terminal na raíz do projeto e execute o comando `yarn install`. Após a instalação dos pacotes do node execute o comando `yarn start` para rodar o projeto.

# Tecnologias
Utilizei os seguintes recursos:
- React
- Material Ui
- Redux, Saga e Typesafe Actions
- Axios
- Eslint e Prettier
- TypeScript

## Requisitos
- Utilizar o React: estou utilizando a biblioteca React instalada com o CRA mais o TypeScript.
- Utilizar o Redux: configurei e utilizei o Redux + Sagas para interagir com a Todos API e criar um todolist com CRUD completo.
- Utilizar Todos API: Configurei localmente a api e rodei com o `docker-compose up -d`.
- Arquivos em um controle de versão: Enviei os arquivos para o GitHub.
- Instruções de uso: adicionei ao meu README as instruções de instalação, tecnologias e como atendi aos requisitos.
- Boas práticas de programação: adicionei eslint, prettier, redux, organização de pastas e código, reaproveitamento de tipagem, reutilização de código, typescript, e material ui pensando em um projeto escalável de grande porte.

## Bonus
Gostaria de ter implementado os tratamentos de erros e o loading. Iniciei a estrutura, mas não tive tempo de concluir.
