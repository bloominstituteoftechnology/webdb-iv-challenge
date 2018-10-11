exports.up = function(knex, Promise) {
	return knex.schema.createTable('instructions', function(tbl) {
		tbl.increments();
		tbl
			.integer('recipe_id')
			.notNullable()
			.references('id')
			.inTable('recipes');
		tbl.integer('step').notNullable();
		tbl.float('quantity').notNullable();
		tbl
			.integer('ingredient_id')
			.notNullable()
			.references('id')
			.inTable('ingredients');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('instructions');
};
