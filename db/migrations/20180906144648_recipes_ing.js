exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes_ing", function(tbl) {
      tbl.increments("id");
  
      tbl
        .int("recipe_id");

        tbl
        .int("ingredient_id");

        tbl
        .int("amount")
        .notNullable();

        tbl
        .string("measurement")
        .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('recipes_ing')
  };