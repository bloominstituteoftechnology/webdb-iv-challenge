
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', table => {
    table.increments();
    table.text('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
