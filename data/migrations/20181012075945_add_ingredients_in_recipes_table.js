exports.up = function(knex, Promise) {
  return knex.schema.createTable("Ingredients in Recipes", function(tbl) {
    tbl.increments();

    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");

    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");

    tbl.float("quantity");
    tbl.string("units");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("Ingredients in Recipes");
};
