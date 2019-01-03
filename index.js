const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json()); // don't forget this


//------------Data Access Library------------

server.get('/', (req, res) => {
  res.send('API Running...');
});

// const getDishes = () => {
    server.get('/api/dishes', (req, res) => {
        db('dishes')
          // .select('name')
          .then(dishes => {
            res.status(200).json(dishes);
          })
          .catch(err => res.status(500).json(err));
      });
// }

// const addDish = () => { 
    server.post('/api/dishes', (req, res) => {
    const dish = req.body;
    // console.log(cohort);
    db.insert(dish)
      .into('dish')
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => res.status(500).json(err));
  });
// }




server.listen(9000);