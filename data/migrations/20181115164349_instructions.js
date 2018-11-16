exports.up = function (knex, Promise) {
  return knex.schema.createTable('instructions', function (tbl) {
    tbl.integer('step')
    tbl.text('description').notNullable()
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('instructions')
}
