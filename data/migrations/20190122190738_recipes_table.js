
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes',
    table => {
      table.increments()
      table.string('recipe_name').notNullable().unique()
      table.integer('dish_id').unsigned()
      table.foreign('dish_id').references('dishes.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIdfExists('recipes')
};
