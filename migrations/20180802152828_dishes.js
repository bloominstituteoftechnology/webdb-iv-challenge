exports.up = function(knex, Promise) {
  // create the dishes table
  return knex.schema.createTable("dishes", function(table) {
    //pk
    table.increments();

    // other fields
    table
      .string("name", 256)
      .unique()
      .notNullable()
      .defaultTo("NOT PROVIDED");
  });
};

exports.down = function(knex, Promise) {
  // drop the dishes table
  return knex.schema.dropTableIfExists("dishes");
};
