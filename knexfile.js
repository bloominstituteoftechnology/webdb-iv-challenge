module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipebook.sqlite3'
    },
    userNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};