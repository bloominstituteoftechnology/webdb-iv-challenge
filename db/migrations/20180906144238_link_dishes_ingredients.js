
exports.up = function(knex, Promise) {
  return knex.schema.createTable('link_recipes_ingredients', function(tbl) {
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('link_recipes_ingredients');
};