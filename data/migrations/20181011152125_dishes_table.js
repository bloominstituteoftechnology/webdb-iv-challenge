
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
      tbl.increments();
      tbl.string('dish', 64).notNullable();
      tbl.unique('dish')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
