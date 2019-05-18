exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
            { recipes_id: 1, name: 'Water', quantity: 5.0 },
			{ recipes_id: 1, name: 'Potato', quantity: 3.0 },
			{ recipes_id: 1, name: 'Rice', quantity: 2.5 }
		]);
	});
};