
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table) {
  	table.increments();
  	table
  		.string('name', 128)
  		.notNullable()
  		.unique('recipe_name')
	table
		.integer('dish_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};
