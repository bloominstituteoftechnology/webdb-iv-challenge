
exports.up = function(knex, Promise) {
 	return knex.schema.createTable('recipeingredients', function(recipeingredients) {
   recipeingredients.increments();
   recipeingredients
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')

  recipeingredients
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')


  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipeingredients');
};

