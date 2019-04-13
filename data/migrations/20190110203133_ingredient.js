
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', table => {
    table.increments();
    table.string('ingredient_name').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient');
};
