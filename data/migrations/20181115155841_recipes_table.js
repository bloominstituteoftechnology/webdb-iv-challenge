exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();

    tbl.string("name", 50).notNullable();
    tbl
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
