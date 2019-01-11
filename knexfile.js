module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe-book.sqlite3'
    },
    useNullAsDefault: true,
  },
};
