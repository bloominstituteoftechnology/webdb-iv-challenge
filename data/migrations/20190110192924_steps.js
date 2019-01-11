
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
      table.increments();
      table.string('step').notNullable();
      table.integer('order').notNullable();
      table.integer('recipe_ID').unsigned();
      table.foreign('recipe_ID').references('id').on('recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
