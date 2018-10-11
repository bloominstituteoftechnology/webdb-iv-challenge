// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    },
    debug: true,
  },
  };
