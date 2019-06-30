// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipes.sqlite3'
    },
    useNullAsDefault: true,
  },

};
