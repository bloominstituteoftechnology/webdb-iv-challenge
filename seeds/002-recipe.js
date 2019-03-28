exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipe')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('recipe').insert([{ name: 'tex-mex' }, { name: 'grannys' }]);
		});
};
