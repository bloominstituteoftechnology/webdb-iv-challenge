exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable();
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .notNullable();
    tbl.float("ingredient_amount").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipeIngredients");
};
