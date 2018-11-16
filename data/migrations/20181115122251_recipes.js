exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (recipes) {
    recipes.increments()
    recipes.string('recipe_name', 255).notNullable()
    recipes
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}
