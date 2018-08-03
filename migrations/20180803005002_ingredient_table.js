
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', function(table) {
    table.increments();
    table.string('ingredient_id').notNullable();
    table.string('ingredient_name').notNullable();
    table.string('link_to_more_info').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredient');
}