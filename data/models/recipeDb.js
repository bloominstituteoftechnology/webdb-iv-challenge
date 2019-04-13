const db = require('../dbConfig.js');

module.exports = {
	getDishes: function() {
		let query = db('dishes');
		return query;
	},
	addDish: function(dish) {
		let query = db('dishes');
		return query
			.insert(dish)
			.then(id => ({ id: id }));
	},
	getDish: function(id) {
		let dishesQuery = db('dishes as d')
		dishesQuery
			.select()
			.where('d.id', id);

		let dishesRecipiesQuery = db('dishes as d')
		dishesRecipiesQuery
			.join('recipes as r', 'd.id', 'r.dish_id')
			.select('r.name')
			.where('d.id', id);

		const promises = [dishesQuery, dishesRecipiesQuery];

		return Promise
			.all(promises)
			.then(results => {
				let [resDishesQuery, resDishesRecipiesQuery] = results;
				if (!resDishesQuery.length) {
					return 'noDishId'; // will be an error that will be handled by the API
				}
				if (!resDishesRecipiesQuery.length) {
					// if this is true then this dish has no recipes so make the
					// recipes property an empty array
					let result = resDishesQuery[0];
					result.recipes = [];
					return result;
				}
				let result = resDishesQuery[0];
				result.recipes = resDishesRecipiesQuery.map(recipe => recipe.name);
				return result;
			});
	},
	getRecipes: function() {
		let query = db('recipes as r');
		return query
			.select('r.id as recipe_id', 'r.name as recipe_name', 'd.name as dish_name')
			.join('dishes as d', 'r.dish_id', 'd.id');
	},
	addRecipe: function(recipe) {
		const { dish_id } = recipe;
		let dishQuery = db('dishes as d');
		dishQuery
			.select()
			.where('d.id', dish_id);

		const promises = [dishQuery];

		return Promise
			.all(promises)
			.then(results => {
				let [ resDishQuery ] = results;
				if (!resDishQuery.length) {
					return 'noDishId'; // will be an error that is be handled by the API
				}
				let recipeQuery = db('recipes');
				return recipeQuery
					.insert(recipe)
					.then(id => ({ id: id }));
			});
	},
	getRecipe: function(id) {
		let recipesQuery = db('recipes as r');
		recipesQuery
			.select('r.id as recipe_id', 'r.name as recipe_name', 'd.name as dish_name')
			.join('dishes as d', 'r.dish_id', 'd.id')
			.where('r.id', id);

		let ingredientsQuery = db('recipes as r');
		ingredientsQuery
			.select('i.name as ingredient_name', 'ri.quantity')
			.join('recipes_ingredients as ri', 'r.id', 'ri.recipe_id')
			.join('ingredients as i', 'ri.ingredient_id', 'i.id')
			.where('r.id', id);

		let instructionsQuery = db('recipes as r')
		instructionsQuery
			.select('step_no', 'step')
			.join('instructions as i', 'r.id', 'i.recipe_id')
			.where('r.id', id);

		const promises = [recipesQuery, ingredientsQuery, instructionsQuery];

		return Promise
			.all(promises)
			.then(results => {
				let [ resRecipesQuery, resIngredientsQuery, resInstructionsQuery ] = results;
				if (!resRecipesQuery.length) {
					return 'noRecipeId'; // will be an error that is be handled by the API
				}
				let result = resRecipesQuery[0];				
				result.ingredients = resIngredientsQuery.length ? resIngredientsQuery : [];
				result.instructions = resInstructionsQuery.length ? resInstructionsQuery : [];
				return result;
			});
	},
};
