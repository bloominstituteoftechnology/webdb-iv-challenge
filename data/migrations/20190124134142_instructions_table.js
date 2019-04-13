
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions',
    table => {
      table.increments()
      table.integer('step_num').notNullable()
      table.string('step').notNullable().unique()
      table.integer('recipe_id').unsigned()
      table.foreign('recipe_id').references('recipes.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions')
};
