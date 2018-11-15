exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments()

    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')

    table.integer('step')
    table.string('action', 1024)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps')
}
