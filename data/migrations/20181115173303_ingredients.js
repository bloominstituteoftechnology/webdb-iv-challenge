exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments()
    table.string('name', 128)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
}
