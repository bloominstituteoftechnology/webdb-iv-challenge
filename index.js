const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

//connection to the data base
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get(`/api/:table`, async (req, res) => {
    try {
      const table  = await db(req.params.table);
      res.status(200).json(table);
    }
    catch (err) {
      res.status(500).json({message: "There was an error while trying to connect to the data base"});
    }
  });




server.listen(9000, () => console.log('\n Api is running \n'));