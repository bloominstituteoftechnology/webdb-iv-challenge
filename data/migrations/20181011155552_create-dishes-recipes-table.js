exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes_recipes', function(table) {
		table
			.increments();

		table
			.integer('dish_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('dishes');

		table
			.integer('recipe_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('recipes');

		table
			.unique('recipe_id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dishes_recipes');
};
