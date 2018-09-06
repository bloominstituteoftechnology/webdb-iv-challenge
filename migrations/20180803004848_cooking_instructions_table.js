
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cooking_instructions', function(table) {
    table.increments();
    table.integer('cooking_instruct_id').notNullable();
    table.string('instruct_text').notNullable();
    table.integer('step_number').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cooking_instructions');
}