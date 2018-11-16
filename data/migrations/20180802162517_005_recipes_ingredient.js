exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', table => {
    table.increments()
    table.integer('recipe_id').unsigned().references('id').inTable('recipes')
    // table.integer('step').unsigned().references('step').inTable('steps')
    table
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
    table.float('quantity').notNullable()
    table.string('unit').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes_ingredients')
}
