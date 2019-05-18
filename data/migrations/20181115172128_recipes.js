exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.string('name', 128).notNullable()
    table
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}
