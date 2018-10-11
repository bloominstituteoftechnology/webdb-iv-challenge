
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Dishes', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('DishName', 128).notNullable();

    tbl.unique('DishName');
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('Dishes');
};
