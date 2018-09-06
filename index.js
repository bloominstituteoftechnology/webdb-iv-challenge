const express = require('express');
const helmet = require('helmet');
const helper = require('./data/helper');

const app = express();
app.use(express.json());
app.use(helmet());

app.get('/dishes', async (req, res) => {
	try {
		const dishes = await helper.getDishes()
		res.status(200).json(dishes)
	} catch(err) {
		res.status(500).json(err);
	}
});

app.get('/dishes/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const dish = await helper.getDish(id)
		res.status(200).json(dish)
	} catch(err) {
		res.status(500).json(err);
	}
});

app.listen(9000, () => {
  console.log('Server listening on 9000');
});