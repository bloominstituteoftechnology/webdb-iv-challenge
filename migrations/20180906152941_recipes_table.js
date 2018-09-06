exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments().primary();
    tbl.string("recipe_name").notNullable();
    tbl
      .integer("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
