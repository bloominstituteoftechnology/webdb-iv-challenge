exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function (tbl) {
    tbl.string('quantity').notNullable()
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
}
