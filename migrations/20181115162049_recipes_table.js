exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();
    tbl.string("name");
    tbl
      .integer("dish id")
      .unsigned()
      .references("id")
      .inTable("dishes");
    tbl.string("directions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
