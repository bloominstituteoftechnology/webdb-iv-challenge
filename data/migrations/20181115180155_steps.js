exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments()

    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .notNullable()

    table.integer('step').notNullable()
    table.string('action', 1024).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps')
}
