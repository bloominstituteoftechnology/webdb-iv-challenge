exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes_ingredients", table => {
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable();
    table
      .foreign("recipe_id")
      .references("id")
      .on("recipes");
    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable();
    table
      .foreign("ingredient_id")
      .references("id")
      .on("ingredients");
    table.integer("step");
    table.float("quantity");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes_ingredients");
};
