exports.seed = function(knex, Promise) {
	const dishes = [{ name: 'omelette' }, { name: 'eggs' }, { name: 'pancake' }];

	return knex('dishes')
		.del()
		.then(function() {
			return knex('dishes').insert(dishes);
		});
};
