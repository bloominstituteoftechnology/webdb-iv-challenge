
exports.up = function(knex, Promise) {
  return knex.schema.createTable('RecipieIngredient', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('Recipies');

      tbl
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('Ingredients');
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('RecipieIngredient');
};
