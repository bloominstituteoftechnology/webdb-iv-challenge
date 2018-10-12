
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredients').truncate()
	.then(function () {
	    // Inserts seed entries
	    return knex('ingredients').insert([
		{recipe_id: 1, name: 'lettuce'},
		{recipe_id: 2, name: 'ham'},
		{recipe_id: 3, name: 'tomato sauce'}
	    ]);
	});
};
