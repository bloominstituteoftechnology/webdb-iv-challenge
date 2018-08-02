exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    tbl.increments('id').primary();
    tbl.string('name', 100);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
