exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipe', table => {
		table.increments();

		table.string('name', 128).notNullable();

		table
			.integer('ingredient.Id')
			.unsigned()
			.references('id')
			.inTable('ingredient')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipe');
};
