exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", tbl => {
    tbl.increments();
    tbl.string("Name", 120).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
