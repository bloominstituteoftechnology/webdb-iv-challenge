exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", table => {
    table.increments();
    table.string("name").notNullable();
    table.unique("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};