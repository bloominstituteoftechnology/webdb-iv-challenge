
exports.up = function (knex, Promise) {
  return knex.schema.createTable('dishes', function (tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments('dish_id'); // pass the name if you wanted to be called anything other than id
    tbl
      .string('name', 255)
      .notNullable()
      .unique('uq_dishes_name');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
