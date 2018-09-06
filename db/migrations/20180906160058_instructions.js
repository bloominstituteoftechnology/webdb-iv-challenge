exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(table) {
    table.increments("id");

    table.integer("step_num").notNullable();
    table.string("step").notNullable();

    // foreign key
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("instructions");
};
