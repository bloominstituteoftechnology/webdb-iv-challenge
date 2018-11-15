
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', function(tbl) {
      tbl.increments();
      tbl.string('name', 255);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};
