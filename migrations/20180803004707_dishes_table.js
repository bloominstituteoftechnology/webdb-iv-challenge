
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(table) {
    table.increments();
    table.integer('dish_type_id').notNullable();
    table.string('dish_name').notNullable();
    table.string('dish_description').notNullable();
    table.integer('dish_likes').notNullable();
    table.string('dish_image').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
}
