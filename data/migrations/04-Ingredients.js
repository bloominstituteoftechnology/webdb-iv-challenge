
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Ingredients', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('IngredientName', 128).notNullable()

    tbl.unique('IngredientName');
  });
};

exports.down = function(knex, Promise) {
    // rollback
    return knex.schema.dropTableIfExists('Ingredients');
};
