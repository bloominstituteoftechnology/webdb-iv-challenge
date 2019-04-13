
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
    table.increments();
    table.string('dish');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
