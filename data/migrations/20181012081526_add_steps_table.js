exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", function(tbl) {
    tbl.increments();

    tbl.string("step").notNullable();

    tbl.unique("step");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("steps");
};
