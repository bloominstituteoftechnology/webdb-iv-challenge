
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('ingredients')
        .notNullable()
        .references('id')
        .inTable('recipe')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
