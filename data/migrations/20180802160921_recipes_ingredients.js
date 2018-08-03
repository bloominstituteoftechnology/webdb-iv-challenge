exports.up = function (knex, Promise) {
  return knex.schema.createTable("recipes_ingredients", tbl => {
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
      .integer("quantity")
      .unsigned()
      .notNullable();
    tbl.string("measurements", 128);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("recipes_ingredients");
};
