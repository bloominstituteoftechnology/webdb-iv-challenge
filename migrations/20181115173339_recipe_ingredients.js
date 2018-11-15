exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipie_ingredients", function(tbl) {
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
    tbl.float("quantity");
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipie_ingredients");
};
