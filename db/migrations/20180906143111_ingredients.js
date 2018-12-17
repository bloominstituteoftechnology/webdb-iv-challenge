exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredients", function(tbl) {
      tbl.increments("id");
  
      tbl
        .string("name")
        .notNullable()
        .unique("ingredient_name");
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('ingredients')
  };