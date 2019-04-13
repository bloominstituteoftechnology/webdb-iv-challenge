exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes_ingredients').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes_ingredients').insert([
				// meat lovers pizza
				{ recipe_id: 1, ingredient_id: 1, quantity: 2, },
				{ recipe_id: 1, ingredient_id: 2, quantity: 20, },
				{ recipe_id: 1, ingredient_id: 3, quantity: 1.2, },
				{ recipe_id: 1, ingredient_id: 4, quantity: 1, },
				{ recipe_id: 1, ingredient_id: 5, quantity: 2, },
				{ recipe_id: 1, ingredient_id: 6, quantity: 8, },
				{ recipe_id: 1, ingredient_id: 7, quantity: 15, },
				// vegetarian pizza
				{ recipe_id: 2, ingredient_id: 3, quantity: 1.2, },
				{ recipe_id: 2, ingredient_id: 4, quantity: 1, },
				{ recipe_id: 2, ingredient_id: 5, quantity: 2, },
				{ recipe_id: 2, ingredient_id: 6, quantity: 8, },
				{ recipe_id: 2, ingredient_id: 9, quantity: 12, },
				// hawaiian pizza
				{ recipe_id: 3, ingredient_id: 3, quantity: 1.2, },
				{ recipe_id: 3, ingredient_id: 4, quantity: 1, },
				{ recipe_id: 3, ingredient_id: 5, quantity: 2, },
				{ recipe_id: 3, ingredient_id: 6, quantity: 8, },
				{ recipe_id: 3, ingredient_id: 8, quantity: 18, },
				// beef tacos
				{ recipe_id: 4, ingredient_id: 1, quantity: 1, },
				{ recipe_id: 4, ingredient_id: 3, quantity: 2, },
				{ recipe_id: 4, ingredient_id: 6, quantity: 1.5, },
				{ recipe_id: 4, ingredient_id: 10, quantity: 3, },
				{ recipe_id: 4, ingredient_id: 11, quantity: 3, },
				{ recipe_id: 4, ingredient_id: 12, quantity: 2.5, },
				// chicken tacos
				{ recipe_id: 5, ingredient_id: 3, quantity: 2, },
				{ recipe_id: 5, ingredient_id: 6, quantity: 1.5, },
				{ recipe_id: 5, ingredient_id: 10, quantity: 3, },
				{ recipe_id: 5, ingredient_id: 11, quantity: 3, },
				{ recipe_id: 5, ingredient_id: 12, quantity: 2.5, },
				{ recipe_id: 5, ingredient_id: 13, quantity: 2.5, },
				// chocolate cake
				{ recipe_id: 6, ingredient_id: 4, quantity: 3.5, },
				{ recipe_id: 6, ingredient_id: 5, quantity: 4, },
				{ recipe_id: 6, ingredient_id: 14, quantity: 6, },
				{ recipe_id: 6, ingredient_id: 15, quantity: 8.2, },
				{ recipe_id: 6, ingredient_id: 16, quantity: 22.5, },
				{ recipe_id: 6, ingredient_id: 18, quantity: 12.5, },
				// icecream cake
				{ recipe_id: 7, ingredient_id: 4, quantity: 3.5, },
				{ recipe_id: 7, ingredient_id: 5, quantity: 4, },
				{ recipe_id: 7, ingredient_id: 17, quantity: 22.5, },
				{ recipe_id: 7, ingredient_id: 18, quantity: 12.5, },
			]);
		});
};
