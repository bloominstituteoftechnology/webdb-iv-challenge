exports.up = function(knex, Promise) {
	return knex.schema.createTable('instructions', function(table) {
		table
			.increments();

		table
			.integer('recipe_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('recipes');

		table
			.integer('step_no')
			.notNullable()
			.unsigned();

		table
			.string('step', 255)
			.notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('instructions');
};
