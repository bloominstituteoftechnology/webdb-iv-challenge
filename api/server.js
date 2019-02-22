const express = require('express');
const helmet = require('helmet');

const db = require('../data/db');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
	res.status(500).json('Welcome');
});

server.get('/api/ingredient', async (req, res) => {
	try {
		const ingredients = await db('ingredient');

		res.status(200).json(ingredients);
	} catch (error) {
		res.status(500).json({ error: 'Cannot retrieve ingredients' });
	}
});

server.post('/api/ingredients', async (req, res) => {
	try {
		const [id] = await db('ingredient').insert(req.body);

		const ingredient = await db('ingredient')
			.where({ id })
			.first();

		res.status(201).json(ingredient);
	} catch (error) {
		const message = errors[error.errno] || 'We ran into an error';
		res.status(500).json({ message, error });
	}
});

module.exports = server;
