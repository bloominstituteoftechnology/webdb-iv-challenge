
exports.up = function(knex, Promise) {
  return knex.schema.crateTable("dishes", function(tbl){
      tbl.increments("id").primary();
      tbl.text("name").unique().notNull();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes")
};
