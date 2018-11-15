exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.increments()
    table.string('quantity', 128)
    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
    table
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
}
