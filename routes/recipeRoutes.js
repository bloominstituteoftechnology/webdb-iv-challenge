const express = require('express');
const recipeDb = require('../data/models/recipeDb.js');

const router = express.Router();

router.get('/', (req, res) => {
	recipeDb
		.getDishes()
		.then(dishes => res.status(200).json(dishes))
		.catch(err => res.status(500).json(`Server failed to get dishes information: ${ err }`));
});

module.exports = router;
