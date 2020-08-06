#rota = http:#localhost:3333/users
# O que vem após a barra é o recurso
#request tem o cabecalho e o corpo da requisição
#response é a resposta que o backend vai devolver 
#RouteParams serve para identificar o recurso que quero atualizar ou excluir(ex: id)

#QueryParams quando estamos fazendo paginação, filtros, ordenação

#Para alteração no banco(inserir, editar, excluir) vem no body

#localhost:3333 - porta de acesso



##Dependencia de desenvolvimento node.js


#Adicionar o typescript no projeto
yarn add typescript -D

#iniciando o typescript
yarn tsc --init

#Fazendo o node reiniciar e pegar as novas alterações nos scripts automaticamente
yarn add ts-node-dev -D

#adiciona o cors para aplicações de outros endereços acessem a API
yarn add cors
yarn add @types/cors
============================================
Para iniciar a aplicação
adicionar no package.json apos	o license

"scripts": {
    "start": "tsnd --transpile-only --igore-watch node_modules --respawn src/server.ts"
  },


Transformar em JS sem verificar se há erros
--transpile-only

Ignorar a pasta node_modules
--igore-watch node_modules

Restartar de forma automatica
--respawn

#Banco de dados
#Para executar o banco é necessário adicionar ao script no package.json 
    
 "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
 "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"

#Métodos mais utilizados: GET, POST, PUT, DELETE



