exports.seed = function(knex, Promise) {
	const ingredients = [
		{ name: 'egg' },
		{ name: 'ounce of ham' },
		{ name: 'ounce of cheese' },
		{ name: 'cup of milk' },
		{ name: 'cup of flour' },
		{ name: 'tablespoon of sugar' },
		{ name: 'tablespoon of butter' }
	];

	return knex('ingredients')
		.del()
		.then(function() {
			return knex('ingredients').insert(ingredients);
		});
};
