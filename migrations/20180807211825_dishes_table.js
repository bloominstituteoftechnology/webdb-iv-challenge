exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", dishes => {
    dishes.increments("id");
    dishes
      .text("dish_name")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
