
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl) {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE');

    tbl
      .float('quantity')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
