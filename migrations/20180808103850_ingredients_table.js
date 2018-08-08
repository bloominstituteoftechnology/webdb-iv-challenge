exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", recipes => {
    recipes.increments("id");
    recipes
      .text("ingredient_name")
      .unique()
      .notNullable();

    recipes.integer("quantity").notNullable();

    recipes
      .integer("dish_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("dishes");

    recipes
      .integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
