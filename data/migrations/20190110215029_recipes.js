

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('name').notNullable();
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
