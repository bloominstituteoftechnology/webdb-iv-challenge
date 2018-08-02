
exports.up = function (knex, Promise) {
  return knex.schema.createTable('step_ingredients', table => {
    table.increments()
    table.integer('recipe_id').unsigned().references('id').inTable('recipes')
    table.integer('step_number').unsigned().references('step_number').inTable('step_instructions')
    table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
    table.string('quantity').notNullable()
  })
}

exports.down = function (knex, Promise) {

}
