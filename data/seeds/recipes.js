exports.seed = function(knex, Promise) {
	const recipes = [
		{
			name: 'ham & cheese',
			dish_id: 1
		},
		{
			name: 'flour & sugar - mmm!',
			dish_id: 1
		},
		{
			name: 'plain old boring eggs',
			dish_id: 2
		},
		{
			name: 'milk & ham - delish!',
			dish_id: 2
		},
		{
			name: 'good old fashioned',
			dish_id: 3
		}
	];

	return knex('recipes')
		.del()
		.then(function() {
			return knex('recipes').insert(recipes);
		});
};
