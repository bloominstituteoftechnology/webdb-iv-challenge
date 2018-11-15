
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredient', table => {
    table.increments()
    table.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
    table.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredient');
};
