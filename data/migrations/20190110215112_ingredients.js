

exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('quantity').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
