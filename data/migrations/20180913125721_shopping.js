exports.up = function(knex, Promise) {
  return knex.schema.createTable("shoppingList", function(tbl) {
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
    tbl.float("quantity").notNullable();
    tbl.string("unit", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shoppingList");
};
