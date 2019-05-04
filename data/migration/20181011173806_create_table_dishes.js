exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", t => {
    t.increments();
    t.string("name", 33).notNullable();
    t.unique("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
