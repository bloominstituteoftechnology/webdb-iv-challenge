
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', table => {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
