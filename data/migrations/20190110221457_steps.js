
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments();
    table.integer('instruction_order').notNullable();
    table.string('instructions').notNullable();
    table.integer('recipe_id').unsigned().unique();
    table.foreign('recipe_id').references('id').on('recipe');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
