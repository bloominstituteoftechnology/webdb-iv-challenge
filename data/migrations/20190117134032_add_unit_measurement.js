exports.up = function(knex, Promise) {
  return knex.schema.createTable("unit_measurement", function(tbl) {
    // primary key
    tbl.increments(); // defaults to a column named id
    // other fields
    tbl
      .string("name", 255)
      .notNullable()
      .unique();

    // constraints
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("unit_measurement");
};
