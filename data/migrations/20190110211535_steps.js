
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('description').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
