exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", tbl => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.unique("name");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
