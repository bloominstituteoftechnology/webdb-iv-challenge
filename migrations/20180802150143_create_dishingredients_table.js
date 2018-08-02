exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishingredients', function(dishingredients) {
   dishingredients.increments();
   dishingredients
     .integer('dishId')
     .unsigned()
     .notNullable()
     .references('id')
     .inTable('dishes');
		dishingredients
          .integer('ingredientId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients');
	});
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('dishingredients');
};


