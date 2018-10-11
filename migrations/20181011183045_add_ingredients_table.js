
exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', function (tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments('ingredient_id'); // pass the name if you wanted to be called anything other than id
    tbl
      .string('name', 255)
      .notNullable()
    tbl
      .float('quantity')
      .notNullable()
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
