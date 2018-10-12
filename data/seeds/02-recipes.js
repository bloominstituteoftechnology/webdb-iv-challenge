exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{ name: 'meat lover\'s pizza', dish_id: 1 },
				{ name: 'vegetarian pizza', dish_id: 1 },
				{ name: 'hawaiian pizza', dish_id: 1 },
				{ name: 'beef tacos', dish_id: 2 },
				{ name: 'chicken tacos', dish_id: 2 },
				{ name: 'chocolate cake', dish_id: 3 },
				{ name: 'ice cream cake', dish_id: 3 },
			]);
		});
};
