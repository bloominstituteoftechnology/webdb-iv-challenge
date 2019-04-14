exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("name", 255);
    tbl
      .integer("recipes_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
