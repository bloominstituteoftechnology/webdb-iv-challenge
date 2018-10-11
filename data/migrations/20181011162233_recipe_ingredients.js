exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe_ingredients", function(tbl) {
        tbl.increments();
      
    tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      
    tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      
    tbl
        .float("quantity")
        .unsigned()
        .notNullable();
      
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("recipe_ingredients");
};
  