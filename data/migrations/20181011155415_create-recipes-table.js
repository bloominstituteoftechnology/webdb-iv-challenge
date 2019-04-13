exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipes', function(table) {
		table
			.increments();

		table
			.string('name', 128)
			.notNullable();

		table
			.integer('dish_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('dishes');

		table
			.unique('name');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
