exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredient", function(table) {
    table.increments();

    table.string("amount").notNullable();

    table
      .integer("recipes_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");

    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredient");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipe_ingredient");
};
