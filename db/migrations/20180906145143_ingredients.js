exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(table) {
    table.increments("id");

    table
      .string("name", 50)
      .notNullable()
      .unique("uq_ingredient_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ingredients");
};
