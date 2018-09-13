exports.up = function(knex, Promise) {
    return knex.schema.createTable("dishes", function(table) {
      table.increments("id");
  
      table
        .string("name", 50)
        .notNullable()
        .unique("uq_dish_name");
      table
        .integer("dish_id")
        .unsigned()
        .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("dishes");
  };