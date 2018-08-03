
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish_recipe', function(table) {
    table.increments();
    table.integer('dish_id').notNullable();
    table.string('recipe_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dish_recipe');
}