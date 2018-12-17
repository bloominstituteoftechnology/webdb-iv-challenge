exports.up = function(knex, Promise) {
    return knex.schema.createTable("instructions", function(tbl) {
      tbl.increments("id");
  
      tbl
        .string("name")
        .notNullable()
        .unique("instruction_name");

        tbl
        .int("recipe_id");
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('instructions')
  };