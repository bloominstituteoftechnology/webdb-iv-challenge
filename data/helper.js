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

module.exports = {
	getDishes,
	addDish,
	getDish
}