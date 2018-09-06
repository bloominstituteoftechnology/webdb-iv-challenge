const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/db');
const helmet = require('helmet');
const cors = require('cors');

const port = 8000;
const server = express();

server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


server.get('/', (req, res) => {

  res.send('Hello World <br><h1>RDBMS-RECIPE-BOOK : working on mvp</h1> <h3>Sam Khaled</h3>');
});

server.get('/dishes', (req, res) => {
	knex('dishes')
		.then(dishes => {
			res.status(200).json(dishes);
		})
		.catch(error => {
			res.status(500).json(error);
		})
});

 server.get('/dishes/:id', (req, res) => {
	const { id } = req.params;
 	knex('dishes').where({ id })
		.then(dishes => {
			if (dishes.length > 0) {
				res.status(200).json(dishes);
			} else {
				res.status(404).json({message: 'dishes does not exist'});
			}
		})
		.catch(error => {
			res.status(500).json(error);
		})
});

server.get('/recipe', (req, res) => {
	knex('recipe')
		.then(recipe => {
			res.status(200).json(recipe);
		})
		.catch(error => {
			res.status(500).json(error);
		})
});

 server.get('/recipe/:id', (req, res) => {
	const { id } = req.params;
 	knex('recipe').where({ id })
		.then(recipe => {
			if (recipe.length > 0) {
				res.status(200).json(recipe);
			} else {
				res.status(404).json({message: 'recipe does not exist'});
			}
		})
		.catch(error => {
			res.status(500).json(error);
		})
});


// server.listen(port, () => console.log(`\n Server is running on http://localhost:${port} === \n`));
server.listen(port, function() {
	console.log(`\n Server is running on http://localhost:${port} === \n`);
});