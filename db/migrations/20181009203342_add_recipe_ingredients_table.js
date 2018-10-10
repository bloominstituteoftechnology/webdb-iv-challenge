exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('amount')
  		.notNullable()

  	tbl
  		.integer('recipes_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('recipes')

  	tbl
  		.integer('ingredient_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('ingredient')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients')
};