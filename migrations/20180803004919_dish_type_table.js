
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish_type', function(table) {
    table.increments();
    table.string('dish_type_name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dish_type');
}