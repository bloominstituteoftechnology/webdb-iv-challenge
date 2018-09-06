const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API Running')
})
  
  server.get('/api/dishes', (req, res) => {
    db('dishes')
      .then(dishes => {
        res.status(200).json(dishes);
      })
      .catch(err => res.status(500).json(err));
  });
    
  server.listen(8000, () => console.log("server running on 8k"));