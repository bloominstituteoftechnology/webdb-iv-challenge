
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
    // id
    tbl.increments();

    // name of ingredient --> should be unique, since the quantity is defined elsewhere
    tbl.string('name', 128).notNullable();
    
    // make name column unique
    tbl.unique('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
