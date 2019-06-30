
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl){
    tbl.increments();
    tbl.string('dish', 200).notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('dishes');
};
