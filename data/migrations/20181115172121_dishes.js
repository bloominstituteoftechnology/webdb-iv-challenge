exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
    table.increments()
    table.string('name', 128)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
}
