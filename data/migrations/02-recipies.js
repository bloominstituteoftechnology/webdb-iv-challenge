
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipies', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('recipeName', 128).notNullable();

    tbl.unique('recipeName');

    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
    // rollback
    return knex.schema.dropTableIfExists('recipies');
};
