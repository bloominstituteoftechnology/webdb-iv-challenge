
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(dishes) {
      projects.increments();
      projects.string('dish').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
