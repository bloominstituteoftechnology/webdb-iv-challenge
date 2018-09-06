
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoping_list', function(table) {
    table.increments();
    table.string('list_name').notNullable();
    table.integer('ingredients_id').notNullable();
    table.integer('total_quantity').notNullable();
    table.string('recipe_id').notNullable();
    table.integer('dish_likes').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shoping_list');
}