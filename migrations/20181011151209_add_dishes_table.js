
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(dishes){
      dishes.increments();
      dishes.string('name', 50).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
