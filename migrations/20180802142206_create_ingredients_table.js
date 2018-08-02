
exports.up = function(knex, Promise) {

	return knex.schema.createTable('ingredients', function(ingredients) {
   ingredients.increments();

   ingredients
   	 .string('ingredients')
	   .unsigned()
     .notNullable()

  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('ingredients');
};




