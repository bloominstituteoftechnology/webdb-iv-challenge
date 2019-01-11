// Update with your config settings.

module.exports = {

    development: {
     client: 'sqlite3',
     connection: {
       filename: './data/RBDB.sqlite3'
     }
   },
 
    staging: {
     client: 'postgresql',
     connection: {
       database: 'my_db',
       user:     'username',
       password: 'password'
     },
     pool: {
       min: 2,
       max: 10
     },
     migrations: {
       tableName: './data/migrations'
     }
   },
 
    production: {
     client: 'postgresql',
     connection: {
       database: 'my_db',
       user:     'username',
       password: 'password'
     },
     useNullAsDefault: true,
     pool: {
       min: 2,
       max: 10
     },
     migrations: {
       tableName: 'knex_migrations'
     }
   }
};