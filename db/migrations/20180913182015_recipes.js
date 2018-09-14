exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();
    tbl.string("name", 128).notNullabe();
    tbl
      .integer("dish_id")
      .unsigned()
      .notNullabe()
      .reference("id")
      .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
