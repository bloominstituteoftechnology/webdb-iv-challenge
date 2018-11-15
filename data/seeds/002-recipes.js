exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').truncate().then(function() {
		// Inserts seed entries
		return knex('recipes').insert([
			{ dishes_id: 1, name: 'Pepperoni Bacon Pizza' },
			{ dishes_id: 1, name: 'Meat Lovers Pizza' },
			{ dishes_id: 1, name: 'Bacon Pizza' },
			{ dishes_id: 2, name: 'Ham and Cheese Sandwich' },
			{ dishes_id: 2, name: 'Salami Sandwich' },
			{ dishes_id: 2, name: 'MeatBall Sandwich' },
			{ dishes_id: 2, name: 'Cheese Sandwhich' },
			{ dishes_id: 3, name: 'Black Cheese Panini' },
			{ dishes_id: 3, name: 'Ham and Cheese Panini' },
			{ dishes_id: 3, name: 'Pepperoni and Cheese Panini' }
		]);
	});
};
