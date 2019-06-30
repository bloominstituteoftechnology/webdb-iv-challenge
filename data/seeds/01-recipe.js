
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipe').truncate()
	.then(function () {
	    // Inserts seed entries
	    return knex('recipe').insert([
		{dish_id: 1, name: 'Tex Mex'},
		{dish_id: 2, name: 'Grannys'},
		{dish_id: 2, name: 'Spicy'},
		{dish_id: 3, name: 'Traditional'}
	    ]);
	});
};
