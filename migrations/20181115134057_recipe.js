
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increment();
      tbl
      .string('recipe', 1000)
      .notNullable()
      .references('id')
      .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe')
};
