
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Recipies', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field

    tbl.string('RecipeName', 128).notNullable();

    tbl.unique('RecipeName');

    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('Dishes');
  });
};

exports.down = function(knex, Promise) {
    // rollback
    return knex.schema.dropTableIfExists('Recipies');
};
