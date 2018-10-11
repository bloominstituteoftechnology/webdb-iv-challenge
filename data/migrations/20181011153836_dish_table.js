
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', function(tbl){
      tbl.increments();
      tbl.string('dish_name', 50).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};
