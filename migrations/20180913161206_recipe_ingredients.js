
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')

      tbl
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')

      tbl
      .float('measurement')
      .notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients');
};
