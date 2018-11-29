exports.up = function(knex, Promise) {
    return knex.schema.createTable("dishes", tbl => {
      tbl.increments();
      tbl.string("name", 240)
         .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("dishes");
  };
