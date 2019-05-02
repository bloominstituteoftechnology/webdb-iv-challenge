exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments();
      tbl
          .string('ingredient_name', 128)
          .notNullable()
          .unique();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema
      .dropTableIfExists('ingredients')
}; 