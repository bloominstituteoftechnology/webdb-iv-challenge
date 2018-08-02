const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/recipes', (req, res) => {
	db('recipes').then(recipes=> {
		res.status(200).json(users);
	}).catch(err => res.status(500).json(err));
});


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
