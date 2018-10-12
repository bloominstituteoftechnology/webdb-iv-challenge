const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
	getDishes,
	getDish,
	addDish,
	getRecipes,
	addRecipe
};

function getDishes() {
	return db('dishes');
}

function getDish(id) {
	return db('dishes')
		.join('recipes', 'dishes.id', 'recipes.dish_id')
		.select('dishes.name as Dish,', 'recipes.name as Recipe')
		.where('recipes.dish_id', id);
}

function addDish(dish) {
	return db('dishes')
		.insert(dish)
		.then(([id]) => id);
}

function getRecipes() {
	return db('recipes')
		.join('dishes', 'dishes.id', 'recipes.dish_id')
		.select('dishes.name as Dish', 'recipes.name as Recipe');
}

function addRecipe(recipe) {
	return db('recipes')
		.insert(recipe)
		.then(([id]) => id);
}
