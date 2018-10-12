
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Dishes', function(tbl) {
    tbl.increments();
    tbl.string('dishName', 48).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Dishes')
};
