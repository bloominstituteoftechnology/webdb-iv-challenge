exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();
    table.string("ingredient_name").notNullable();
    table.float("quantity").notNullable();
    table.integer("recipe_id").unsigned().notNullable();
    table
      .foreign("recipe_id")
      .references("id")
      .on("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
