const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getRecipes,
	addRecipe
};

function getRecipes() {
	return db('recipies');
}

function addRecipe(recipe) {
	return db('recipe').insert(recipe).then((ids) => ({ id: ids[0] }));
}
