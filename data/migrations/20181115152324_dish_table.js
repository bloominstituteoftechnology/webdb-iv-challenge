
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl){
      tbl.increments();
      tbl.string('name', 25).notNullable();
      tbl.unique('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
