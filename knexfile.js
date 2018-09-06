
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/recipe.sqlite3'
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
