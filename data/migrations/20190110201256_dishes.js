
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("dish_name").notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
