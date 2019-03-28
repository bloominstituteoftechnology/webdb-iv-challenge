// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dish.sqlite3',
    },
    useNullAsDefault: true,
  },
};
