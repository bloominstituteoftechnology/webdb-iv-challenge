// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    
    connection: {
      filename: './data/menurecipes.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/schemes.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }, 

};
