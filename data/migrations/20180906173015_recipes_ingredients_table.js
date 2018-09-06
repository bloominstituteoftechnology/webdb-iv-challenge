exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes_ingredients", function(tbl) {
    tbl.increments();

    tbl.float("amount").notNullable();

    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");

    tbl
      .integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes_ingredients");
};
