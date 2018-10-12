
exports.up = function(knex, Promise) {
  return knex.schema.createTable('RecipesIngredients', function(tbl) {
    tbl.increments();
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('Recipes');
      tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('Ingredients');
      tbl.integer('Quantity', 255).notNullable();
      tbl.string('Unit', 12).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('RecipesIngredients')
};
