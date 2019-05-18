exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('steps').del().then(function() {
		// Inserts seed entries
		return knex('steps').insert([
			{ recipes_id: 1, name: 'Chop Bacon', step: 1 },
			{ recipes_id: 1, name: 'Chop Onion', step: 2 },
			{ recipes_id: 1, name: 'Chop Pepperoni', step: 3 }
		]);
	});
};
