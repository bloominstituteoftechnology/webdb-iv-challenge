
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments();
      tbl
      .string('recipe', 1000)
      .notNullable()

      tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe')
};
