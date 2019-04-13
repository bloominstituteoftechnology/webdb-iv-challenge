// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './lambdacooks.sqlite3'
    },
    useNullAsDefault: true
  }
}