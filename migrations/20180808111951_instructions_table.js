exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", recipes => {
    recipes.increments("id");

    recipes.text("description").notNullable();

    recipes
      .integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
