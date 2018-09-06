// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // pool: {
    //   afterCreate: (conn, cb) =>
    //    conn.run('PRAGMA foreign_keys = ON', cb)
    // }
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost', 
      user: 'luis', 
      password: 'pass', 
      database: 'blogdb', 
    },
    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },

};
