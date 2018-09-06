
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
      tbl.increments();

      tbl
        .string('title', 128)
        .notNullable()
        .unique('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
