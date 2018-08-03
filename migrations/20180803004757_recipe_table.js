
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table) {
    table.increments();
    table.string('recipe_name').notNullable();
    table.string('recipe_description').notNullable();
    table.integer('cooking_instruct_id').notNullable();
    table.integer('servings').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe');
}