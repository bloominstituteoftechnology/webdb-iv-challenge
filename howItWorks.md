1. Inititialize yarn

`
yarn init
`

2. Make the package.json look like so

```
{
  "name": "db-recipe-book",
  "version": "1.0.0",
  "description": "data model for a recipe book app",
  "main": "index.js",
  "repository": "https://github.com/blkfltchr/db-recipe-book.git",
  "license": "MIT",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.16.3",
    "knex": "^0.15.2",
    "nodemon": "^1.18.3",
    "sqlite3": "^4.0.2"
  }
}
```

3. Create a basic `server.js` file

```
const express = require('express');

const server = express();

server.use(express.json());

const port = 4000;

server.listen(port, function() {
    console.log(`\n--- Web API Listening on http://localhost${port} ---\n`);
})
```

4. Intitalize knex

`
knex init
`

5. Create a `/data` folder and create a `.sqlite3` file inside the folder on db browser - change the code below in the `knexfile.js` to the appropriate file name

```
connection: {
      filename: './data/recipe-book.sqlite3'
    }
``` 

6. Create the database in db browser

7. To make sure the knex knows to use the development version, add this property to the development section of `knexfile.js`

```
useNullAsDefault: true
```

8. Create a basic `db.js` file

```
const config = require('../knexfile');

const knex = require('knex');

module.exports = knex(config.development);
```

9. Make sure the server is running with the following code on `server.js`

```
server.get('/', (req, res) => {
    res.send('up and running...')
})
```

10. Create a `/routes` folder and fill it with `apiRouter.js`, `dishRoutes.js`, `recipeRoutes.js`, `ingredientRoutes.js` files

11. `apiRouter.js` should look something like this

```
const express = require('express');
const server = express.Router();

const dishRoutes = require('./dishRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes');

server.use('/dishs', dishRoutes);
server.use('/recipes', recipeRoutes);
server.use('/ingredients', ingredientRoutes);

module.exports = server;
```

12. Add this to the `server.js` file

```
const apiRouter = require('./routes/apiRouter');
server.use('/', apiRouter);
```

13. `dishRoutes.js`, `recipeRoutes.js` and `ingredientRoutes.js` should look something like this

```
const express = require('express');
const server = express.Router();
const db = require('../data/db');

// endpoints go here

 module.exports = server;