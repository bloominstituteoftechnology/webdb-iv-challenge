const express = require('express');
const helmet = require('helmet');
const server = express();
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const db = knex(knexConfig.development);
const recipesRouter = require('./router/recipes.js');
const dishRouter = require('./router/dish.js')

server.use(helmet());
server.use(express.json());



server.use('/api/recipe', recipesRouter);
server.use('/api/dish', dishRouter)



const port = process.env.PORT || 5000;
server.listen(port, () =>
 console.log(`\n** API running on http://localhost:${port} **\n`)
);