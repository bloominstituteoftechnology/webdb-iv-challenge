exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes", function(tbl) {
      tbl.increments("id");
  
      tbl
        .string("name")
        .notNullable()
        .unique("recipe_name");
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('recipes')
  };
