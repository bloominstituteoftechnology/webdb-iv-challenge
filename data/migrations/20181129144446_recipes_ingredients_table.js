exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
      .integer("recipes_id")
      .references("id")
      .inTable("recipes")
      tbl
      .integer("ingredients_id")
      .references("id")
      .inTable("ingredients")
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes_ingredients");
  };