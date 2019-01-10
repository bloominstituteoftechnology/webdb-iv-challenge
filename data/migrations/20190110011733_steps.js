
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments();
    table.integer('order').notNullable();
    table.text('directions').notNullable();
    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
