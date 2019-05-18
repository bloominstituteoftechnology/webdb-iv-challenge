exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.increments()
    table.float('quantity')
    table.string('measurment', 128).notNullable()
    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .notNullable()
    table
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
}
