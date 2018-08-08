exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", recipes => {
    recipes.increments("id");
    recipes
      .text("recipe_name")
      .unique()
      .notNullable();

    recipes
      .integer("dish_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("dishes");

    recipes
      .integer("ingredient_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
