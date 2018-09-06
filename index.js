const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const dishdb = require('./data/helpers/dishDb');
const server = express();
const mw = require('./middleware');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use(mw.errorHandler);

server.get('/', (req, res) => {
  res.send('It works mon');
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

const port = 3900;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} mon ===\n`);
});
