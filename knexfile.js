// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db-recipe-book.db3'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds'
    }
  },
};
