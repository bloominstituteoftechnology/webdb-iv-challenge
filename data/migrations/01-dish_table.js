
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('dishName', 128).notNullable();

    tbl.unique('dishName');
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('dishes');
};
