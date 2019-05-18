exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('steps').del().then(function() {
		// Inserts seed entries
		return knex('steps').insert([
			{ recipes_id: 1, name: 'Boil Water', step: 1 },
			{ recipes_id: 1, name: 'Boil Potato', step: 2 },
			{ recipes_id: 1, name: 'Boil Rice', step: 3 }
		]);
	});
};