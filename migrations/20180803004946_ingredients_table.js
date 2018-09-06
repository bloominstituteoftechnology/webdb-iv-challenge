
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table) {
    table.increments();
    table.integer('recipe_id').notNullable();
    table.integer('ingredient_id').notNullable();
    table.string('ingredient_quantity').notNullable();
    table.string('measurement_unit').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
}