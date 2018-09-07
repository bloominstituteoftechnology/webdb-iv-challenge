exports.up = function(knex, Promise) {
  return knex.schema.createTable("quantity", function(table) {
    table.increments("id");

    table.float("number_required").notNullable();
    table.string("unit_of_measure").notNullable();

    // foreign key
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");

    // foreign key
    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("quantity");
};
