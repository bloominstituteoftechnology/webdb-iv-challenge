
exports.up = function (knex, Promise) {
  return knex.schema.createTable('step_instructions', table => {
    table.integer('step_number').primary()
    table.integer('recipe_id').unsigned().references('id').inTable('recipes')
    table.string('quantity')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('step_instructions')
}
