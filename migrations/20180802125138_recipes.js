
exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('dishId').unsigned().references('id').inTable('dishes')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}
