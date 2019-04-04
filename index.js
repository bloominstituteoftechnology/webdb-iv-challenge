const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const ingredientdb = require('./data/helpers/ingredientsDb');
const dishdb = require('./data/helpers/dishDb');
const recipedb = require('./data/helpers/recipeDb');
const server = express();
const mw = require('./middleware');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(mw.errorHandler);



const port = 4000;
server.listen(process.env.PORT || port, function() {
  console.log(`\n=*= API rolling on port http://localhost:${port} mon =*=\n`);
});
