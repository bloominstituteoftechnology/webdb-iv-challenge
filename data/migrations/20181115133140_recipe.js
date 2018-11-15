
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments();
      tbl
        .string('recipe', 256)
        .notNullable()
      tbl
        .string('dishId')
        .references('id')
        .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe')
};
