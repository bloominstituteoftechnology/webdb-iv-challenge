const express = require('express');
const db = require('./db');

const server = express();
server.use(express.json());

server.get('/api/dishes', async (req, res) => {
  const payload = await db('dishes');
  res.status(200).json(payload);
});

server.listen(8000, () => { console.log('Listening on 8000'); });