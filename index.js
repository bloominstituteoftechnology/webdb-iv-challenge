const express = require("express");
const db = require('./data/helper_functions')

const server = express();
server.use(express.json());

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

server.get('/api/dishes', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})