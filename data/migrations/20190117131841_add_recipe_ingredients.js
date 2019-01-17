exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", function(tbl) {
    // primary key
    tbl.primary(["recipe_id", "ingredient_id"]); // defaults to a column named id
    // other fields

    tbl.float("quantity").notNullable();
    // foreign key example
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes");
    tbl
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients");
    tbl
      .integer("unit_id")
      .references("id")
      .inTable("ingredients");
    // constraints
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
