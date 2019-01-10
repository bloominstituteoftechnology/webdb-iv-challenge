
exports.up = function(knex, Promise) {
  knex.schema.createTable("dishes", table => {
    table.increments();
    table.string("name", 280).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
