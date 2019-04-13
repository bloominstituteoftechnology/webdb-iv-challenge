const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.send('up and running...');
});

server.get('/recipes', (req, res) => {
	db('recipes')
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			res.json({ errorMessage: err.message });
		})
});

server.get('/recipes/:id', (req, res) => {
	const { id } = req.params;
	db('recipes')
	  .where({ id })
	  .then(recipes => {
	  	res.json(recipes);
	  })
	  .catch(err => {
	  	res.json({ err });
	  })
});

server.get('recipes', (req, res) => {
	const recipe = req.body;
	db
	  .insert(recipe)
	  .into('recipes')
	  .then(recipe => {
	  	res.json(recipe);
	  })
	  .catch(err => {
	  	res.json({ err });
	  });
});

server.delete('/recipes/:id', (req, res) => {
	const { id } = req.params;
	db('recipes')
	  .where({ id })
	  .del()
	  .then((id) => {
	  	res.json(id);
	  })
	  .catch(err => {
	  	res.json({ err });
	  })
});

server.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = req.body;
  db('recipes')
    .where({ id })
    .update(recipe)
    .then((recipe) => {
        res.json(recipe);
    })
    .catch(err => {
        res.json({ err });
    })
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on port ${port} ===\n`);
});