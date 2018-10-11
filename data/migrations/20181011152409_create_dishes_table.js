
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    // id
    tbl.increments();

    // name column
    tbl.string('name', 128).notNullable();

    tbl.unique('name');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
