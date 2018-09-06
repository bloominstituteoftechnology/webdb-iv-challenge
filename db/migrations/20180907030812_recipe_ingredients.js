exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(table) {
    table.increments();

    table
      .integer('recipe_id')
      .unsigned()
      .references('recipes.id');

    table
      .integer('ingredient_id')
      .unsigned()
      .references('ingredients.id');

    table.float('quantity');

    table.string('unit_of_measure', 32);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
