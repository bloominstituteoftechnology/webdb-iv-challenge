
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('ingredientName', 128).notNullable()

    tbl.unique('ingredientName');
  });
};

exports.down = function(knex, Promise) {
    // rollback
    return knex.schema.dropTableIfExists('ingredients');
};
