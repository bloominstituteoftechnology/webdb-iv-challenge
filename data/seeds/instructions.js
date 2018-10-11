exports.seed = function(knex, Promise) {
	const instructions = [
		{
			recipe_id: 1,
			step: 1,
			quantity: 2,
			ingredient_id: 1
		},
		{
			recipe_id: 1,
			step: 2,
			quantity: 2,
			ingredient_id: 2
		},
		{
			recipe_id: 1,
			step: 3,
			quantity: 2,
			ingredient_id: 3
		},
		{
			recipe_id: 2,
			step: 1,
			quantity: 2,
			ingredient_id: 1
		},
		{
			recipe_id: 2,
			step: 2,
			quantity: 1,
			ingredient_id: 5
		},
		{
			recipe_id: 2,
			step: 3,
			quantity: 4,
			ingredient_id: 6
		},
		{
			recipe_id: 3,
			step: 1,
			quantity: 2,
			ingredient_id: 1
		},
		{
			recipe_id: 4,
			step: 1,
			quantity: 2,
			ingredient_id: 1
		},
		{
			recipe_id: 4,
			step: 2,
			quantity: 1,
			ingredient_id: 2
		},
		{
			recipe_id: 4,
			step: 3,
			quantity: 1,
			ingredient_id: 4
		},
		{
			recipe_id: 5,
			step: 1,
			quantity: 1,
			ingredient_id: 5
		},
		{
			recipe_id: 5,
			step: 2,
			quantity: 1,
			ingredient_id: 6
		},
		{
			recipe_id: 5,
			step: 3,
			quantity: 1,
			ingredient_id: 4
		},
		{
			recipe_id: 5,
			step: 4,
			quantity: 1,
			ingredient_id: 1
		},
		{
			recipe_id: 5,
			step: 5,
			quantity: 3,
			ingredient_id: 7
		}
	];

	return knex('instructions')
		.del()
		.then(function() {
			return knex('instructions').insert(instructions);
		});
};
