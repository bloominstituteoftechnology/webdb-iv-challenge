
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
