
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredient_connections', function(tbl) {
    // id
    tbl.increments();

    // quantity --> float number (aka has decimals)
    tbl.float('quantity');

    // units --> string (text, required)
    tbl.string('units', 128).notNullable();

    // recipe_id --> reference to the id from recipes table
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');

    // ingredient_id --> reference to the id from ingredients table
    tbl
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredient_connections');
};
