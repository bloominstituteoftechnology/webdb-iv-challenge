exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(table) {
    table.increments();
    table
      .string("dish_name")
      .notNullable()
      .unique("dish_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("dishes");
};
