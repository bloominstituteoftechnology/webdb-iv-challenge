
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredient', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('amount').notNullable();

    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipies');

      tbl
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('recipeIngredient');
};
