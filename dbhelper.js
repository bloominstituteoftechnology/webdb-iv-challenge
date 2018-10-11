const db = require('./index.js')

function getDishes(){
	return db('dish')
}

function addDish(dish){
	return db('dish').insert(dish)
}

function getDish(id){
	return db('dish').join('recipe', 'recipe.dish_id', 'dish.id').where({'dish.id': id})
}

function getRecipes(){
	return db('recipe')
}

function addRecipe(recipe){
	return db('recipe').insert(recipe)
}



module.exports = {
	getDishes,
	addDish,
	getDish,
	getRecipes,
	addRecipe,
	getRecipe,

}
