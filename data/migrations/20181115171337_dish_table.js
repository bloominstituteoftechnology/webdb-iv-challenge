exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table.string("recipe", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
