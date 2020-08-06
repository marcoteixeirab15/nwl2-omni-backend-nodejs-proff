import knex from 'knex';
import path from 'path';

//yarn add knex sqlite3 instala o db, o sqlite guarda as informações em um arquivo
//yarn add @types/express -D adiciona o typesexpress
//o knex permite que eu escreva consulta sql em JS. ex: SELECT * FROM cliente == knex(cliente).select(*)
//migrtions - controle de versão do bd

//o sqlite salva todos os dados em um arquivo, então é preciso realizar essa configuracao do banco.
//useNullAsDefault, adiciona null no campo não preenchido

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});

export default db;