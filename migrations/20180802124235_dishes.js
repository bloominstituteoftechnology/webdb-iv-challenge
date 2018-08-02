exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(tbl) {
    tbl.increments();

    tbl
      .string("Name", 256)
      .notNullable()
      .unique()
      .defaultTo("NotProvided");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
