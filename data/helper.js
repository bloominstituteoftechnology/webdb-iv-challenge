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

async function getRecipe(id){
	try {
		let ingredients = await db('ingredients_in_recipe')
							.where({'ingredients_in_recipe.recipe_id': id})
							.join('ingredients', 'ingredients_in_recipe.ingredient_id', 'ingredients.id')
							.join('units', 'ingredients_in_recipe.unit_id', 'units.id')
							.select('ingredients.name as Ingredient', 'ingredients_in_recipe.quantity as Quantity',
									'units.name as Unit')
		let steps = await db.select('steps.step_number as Step_Number', 'steps.description as Step')
						.from('steps')
						.where({'steps.recipe_id': id})
						.orderBy('Step_Number')
		let info = await db('recipes')
							.join('dishes', 'dishes.id', 'recipes.dish_id')
							.where({'recipes.id': id})
							.select('recipes.name as Name', 'dishes.name as Dish')
		return { info, ingredients, steps };
	} catch(err){
		console.log(err)
	}
}

module.exports = {
	getDishes,
	addDish,
	getDish,
	getRecipes,
	addRecipe,
	getRecipe
}