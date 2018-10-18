exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes');
    table
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients');
    table.float('amount').notNullable();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients');
};
