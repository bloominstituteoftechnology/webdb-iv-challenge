exports.up = function (knex, Promise) {
  return knex.schema.createTable('dishes', function (dishes) {
    dishes.increments()
    dishes.string('dish_name', 255).notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
}
