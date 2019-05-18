
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
      tbl.increments();
      tbl
        .string('name', 200)
        .notNullable()
        .unique('dish-name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes')
};
