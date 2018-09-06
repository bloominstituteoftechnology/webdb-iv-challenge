exports.up = function(knex, Promise) {
    return knex.schema.createTable("dishes", function(tbl) {
      tbl.increments("id");
  
      tbl
        .string("name")
        .notNullable()
        .unique("dish_name");
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('dishes')
  };