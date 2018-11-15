
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl.string('name', 255).unique()
    tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
