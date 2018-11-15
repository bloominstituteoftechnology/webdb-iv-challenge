exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ recipes_id: 1, name: 'Onions', quantity: 2.0 },
			{ recipes_id: 1, name: 'Bacon', quantity: 4.0 },
			{ recipes_id: 1, name: 'Peperoni', quantity: 0.5 }
		]);
	});
};
