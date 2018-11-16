exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', function (tbl) {
    tbl.increments();
    tbl.string('name', 255).notNullable
    tbl.timestamps(true, true)
    tbl.integer('recipe_id')
      .references('id')
      .inTable('recipes')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};