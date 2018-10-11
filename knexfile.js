// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/recipe_book.sqlite3'
    },
    useNullAsDefault: true,
    migration: {
      directory: "./migrations"
    }
  },
};
