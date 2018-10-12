exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl) {
    tbl.increments();

    tbl
      .integer('ingredient_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients');

    tbl
      .integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes');

    tbl
      .float('quantity')
      .unsigned()
      .notNullable();

    tbl.string('measurement', 32).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
