exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(table) {
    table.increments();

    table
      .string("recipe_name")
      .notNullable()
      .unique("recipe_name");

    table.string("imstructions").notNullable();

    table
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
