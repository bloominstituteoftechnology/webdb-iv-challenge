
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments();
    table.integer('step_order').notNullable();
    table.text('explanation').notNullable();
    table.integer('recipe_id').unsigned().notNullable();
    table.foreign('recipe_id').references('id').inTable('steps');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
