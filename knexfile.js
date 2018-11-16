module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/recipeBook.sqlite3' },
    useNullAsDefault: true,
    migrations: { directory: 'database/migrations' },
    seeds: { directory: './database/seeds' }
  }
};
