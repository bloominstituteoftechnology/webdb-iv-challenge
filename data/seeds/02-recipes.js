exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{ name: 'meat lover\'s pizza' },
				{ name: 'vegetarian pizza' },
				{ name: 'hawaiian pizza' },
				{ name: 'beef tacos' },
				{ name: 'chicken tacos' },
				{ name: 'chocolate cake' },
				{ name: 'ice cream cake' },
			]);
		});
};
