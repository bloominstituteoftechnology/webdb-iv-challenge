
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    tbl.increments('dish_id');
    
    tbl
      .string('name', 64)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
