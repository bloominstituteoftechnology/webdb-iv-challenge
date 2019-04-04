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

server.get('/', (req, res) => {
  res.send('It works mon');
});


const port = 4000;
server.listen(process.env.PORT || port, function() {
  console.log(`\n=*= API rolling on port http://localhost:${port} mon =*=\n`);
});

server.get('/api/dishes', (req, res, next) => {
  dishdb
    .getDishes()
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => next(err));
});


server.get('/api/dishes/:id', (req, res, next) => {
  dishdb
    .getDish(req.params.id)
    .then(data => {
      if (!data) {
        return next({ code: 404 });
      }
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

server.post('/api/dishes', (req, res, next) => {
  let body = req.body;
  dishdb
    .addDish(body)
    .then(data => res.status(200).json(data))
    .catch(err => next(err));
});


server.get('/api/recipes', (req, res, next) => {
  recipedb
    .getRecipes()
    .then(data => res.status(200).json(data))
    .catch(err => next(err));
});


server.post('/api/recipes', (req, res, next) => {
  let body = req.body;
  recipedb
    .addRecipe(body)
    .then(data => res.status(200).json(data))
    .catch(err => next(err));
});
