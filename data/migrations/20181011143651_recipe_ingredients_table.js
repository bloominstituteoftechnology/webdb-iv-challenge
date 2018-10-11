
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', function(tbl) {
      tbl.increments();
      tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes');
      tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredients');
};
