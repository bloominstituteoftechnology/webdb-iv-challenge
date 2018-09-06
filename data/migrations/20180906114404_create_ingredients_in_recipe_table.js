
exports.up = function(knex, Promise) {
      return knex.schema.createTable('ingredients_in_recipe', function(table) {
      	table.increments();
  	  	table
  	  		.integer('recipe_id')
  	  		.unsigned()
  	  		.notNullable()
  	  		.references('id')
  	  		.inTable('recipes')
  		table
  			.integer('ingredient_id')
  			.unsigned()
  			.notNullable()
  			.references('id')
  			.inTable('ingredients')
		table
			.float('quantity')
			.notNullable()
  	    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients_in_recipe')
};
