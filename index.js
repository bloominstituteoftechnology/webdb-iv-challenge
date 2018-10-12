const express = require("express");
const helmet = require("helmet");
const dishesRouter = require('./routers/dishesRouter');
const recipesRouter = require('./routers/recipesRouter');

// init server
const server = express();

// middleware
server.use(express.json(), helmet());

server.get('/', (req, res) => res.status(200).send(`<h1>Client Facing Page</h1>`));

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

// listener
server.listen(process.env.PORT, () =>
  console.log(`API running on port ${process.env.PORT}`)
);
