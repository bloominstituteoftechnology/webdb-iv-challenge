exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    tbl.float("quantity");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
