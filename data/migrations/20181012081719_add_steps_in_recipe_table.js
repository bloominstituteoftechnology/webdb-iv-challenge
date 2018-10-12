exports.up = function(knex, Promise) {
  return knex.schema.createTable("Steps in Recipes", function(tbl) {
    tbl.increments();

    tbl
      .integer("step_id")
      .unsigned()
      .references("id")
      .inTable("steps");

    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");

    tbl.integer("order");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("Steps in Recipes");
};
