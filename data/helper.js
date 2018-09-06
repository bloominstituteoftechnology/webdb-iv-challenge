const db = require('./index.js')

function getDishes(){
	return db('dishes')
}

function addDish(dish){
	return db('dishes').insert(dish)
}

function getDish(id){
	return db('dishes').join('recipes', 'recipes.dish_id', 'dishes.id').where({'dishes.id': id})
}

function getRecipes(){
	return db('recipes')
}

function addRecipe(recipe){
	return db('recipes').insert(recipe)
}

module.exports = {
	getDishes,
	addDish,
	getDish,
	getRecipes,
	addRecipe
}