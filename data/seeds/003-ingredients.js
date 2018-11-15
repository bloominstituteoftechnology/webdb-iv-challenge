exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ ingredients_id: 1, name: 'rowValue1' },
			{ ingredients_id: 2, name: 'rowValue2' },
			{ ingredients_id: 3, name: 'rowValue3' }
		]);
	});
};
