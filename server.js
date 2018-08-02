const express = require('express');
const db = require('./data/db');
// const routes = require('./routers/routes');
const server = express();

server.use(express.json());
// server.use(routes)

server.get('/', (req, res) => {
  res.send('Hello!')
})

server.get('/dishes', (req, res) => {
  db('dishes')
  .then(response => {
    res.status(200).json(response);
  })
  .catch(err => {
    res.status(500).json({error: 'The dishes could not be retrieved'})
   });
})

server.get('/dishes/:id/recipes', (req, res) => {
  const id = req.params;
  db
  .getRecipe(id)
  .then(response => {
      res.json({ response })
  })
  .catch(error => {
      errorHandler(500, "The recipe could not be retrieved.", res);
  });
});

const port = 5555;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});