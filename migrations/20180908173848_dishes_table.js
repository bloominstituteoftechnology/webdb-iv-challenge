exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(tbl) {
    tbl.increments().primary();
    tbl.string("dish_name").notNullable();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
