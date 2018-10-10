exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('recipe_name')
  		.notNullable()
  		.unique('recipe_name')

    tbl
      .string('directions')
      .notNullable()

  	tbl
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
