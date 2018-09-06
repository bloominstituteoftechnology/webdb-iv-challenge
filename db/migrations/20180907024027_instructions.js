exports.up = function(knex, Promise) {
  return knex.schema.createTable('insturctions', function(table) {
    table.increments();

    table
      .integer('step')
      .unsigned()
      .notNullable();

    table
      .integer('recipe_id')
      .unsigned()
      .references('recipes.id');

    table.string('description', 1000).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
