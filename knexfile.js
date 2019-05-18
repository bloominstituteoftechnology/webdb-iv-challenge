module.exports = {
  development: {
   client: 'sqlite3',
   connection: {
     filename: './Data/recipeBook.sqlite3'
   },
   useNullAsDefault: true,
   migrations: {
     directory: './Data/migrations',
   },
   seeds: {
     directory: "./Data/seeds"
   }
 },
};