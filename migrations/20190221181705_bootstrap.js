exports.up = function(knex, Promise) {
	return knex.schema.createTable('dish', table => {
		table.increments();

		table
			.string('name', 128)
			.notNullable()
			.unique();

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dish');
};
