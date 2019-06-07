// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipes.db3'
    },
    useNullAsDefault:true,
  },
  migrations: {
    // we can change the location of the migrations
    directory: './data/migrations',
  },
  seeds: {
    // we can change the location of the seeds
    directory: './data/seeds',
  },
};
