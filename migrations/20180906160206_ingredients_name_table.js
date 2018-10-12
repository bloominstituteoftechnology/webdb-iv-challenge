
exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredient_names", function(tbl) {
    tbl.increments().primary();
    tbl.string("ingredient_name").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredient_names");
};
