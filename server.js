const express = require('express');
const server = express();
const db = require('./data/dbConfig.js');

server.use(express.json());

server.get('/dishes', async (req, res) => {
  try {
    const dishes = await db('dishes');
    res.status(200).json(dishes);
  } catch(err) {
    res.status(500).send(`You done goofed with ${err}`);
  }
});

server.listen(8000, () => console.log('App is lisening...'));
