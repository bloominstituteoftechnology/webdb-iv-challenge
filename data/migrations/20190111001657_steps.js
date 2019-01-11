
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments();
    table.string('instruction').notNullable();
    table.integer('order').notNullable();
    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
