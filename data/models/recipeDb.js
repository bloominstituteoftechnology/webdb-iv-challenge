const db = require('../dbConfig.js');

module.exports = {
	getDishes: function() {
		let query = db('dishes')
		return query;
	},
	addDish: function(dish) {
		let query = db('dishes')
		return query
			.insert(dish)
			.then(id => ({ id: id }));
	},
	getDish: function(id) {
		let dishesQuery = db('dishes as d')
		dishesQuery
			.select()
			.where('d.id', id);

		let dishesRecipesQuery = db('dishes as d')
		dishesRecipesQuery
			.join('dishes_recipes as dr', 'd.id', 'dr.dish_id')
			.select('d.id', 'd.name')
			.groupBy('d.id')
			.where('d.id', id);

		let dishesRecipesQuery1 = db('dishes_recipes as dr')
		dishesRecipesQuery1
			.join('recipes as r', 'dr.recipe_id', 'r.id')
			.where('dr.dish_id', id)

			const promises = [dishesQuery, dishesRecipesQuery, dishesRecipesQuery1];

			return Promise
				.all(promises)
				.then(results => {
					let [resDishesQuery, resDishesRecipesQuery, resDishesRecipesQuery1] = results;
					if (!resDishesQuery.length) {
						return 'noDishId';
					}
					if (!resDishesRecipesQuery.length) {
						let result = resDishesQuery[0];
						result.recipes = [];
						return result;
					}
					let result = resDishesRecipesQuery[0];
					result.recipes = resDishesRecipesQuery1.map(recipe => recipe.name);
					return result;
				});
	},
	getRecipes: function() {
		let query = db('recipes as r')
		return query
			.select('r.id', 'r.name', 'd.name as dish_name')
			.join('dishes_recipes as dr', 'r.id', 'dr.recipe_id')
			.join('dishes as d', 'dr.dish_id', 'd.id')
	},
	addRecipe: function(recipe) {
		let query = db('recipes')
		return query
			.insert(recipe)
			.then(id => ({ id: id }));
	},
};
