exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (tbl) {
    tbl.increments();
    tbl.string('name', 255).notNullable
    tbl.timestamps(true, true)
    tbl.integer('dish_id')
      .references('id')
      .inTable('dishes')

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};