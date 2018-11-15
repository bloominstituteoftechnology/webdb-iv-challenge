exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments();
    table.string('name', 160);
    table.string('measurement_unit')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
