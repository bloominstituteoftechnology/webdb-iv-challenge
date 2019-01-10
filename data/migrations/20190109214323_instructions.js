
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', table => {
    table.increments();
    table.integer('step_number').notNullable();
    table.string('step').notNullable().references('step_number');
    table.integer('recipe_id').unsigned().unique();
    table.foreign('recipe_id').references('id').on('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
