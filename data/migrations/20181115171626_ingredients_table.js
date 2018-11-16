
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){
    tbl.increments();
    tbl.string('name', 150).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
