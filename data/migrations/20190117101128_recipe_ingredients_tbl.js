exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", tbl => {
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
      .float("amount")
      .unsigned()
      .notNullable();

    tbl.string("units", 50).notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
