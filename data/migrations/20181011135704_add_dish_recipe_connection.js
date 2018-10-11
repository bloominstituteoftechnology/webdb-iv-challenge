exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish_recipes", table => {
    table.increments().primary();
    table
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes");
    table
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish_recipes");
};
