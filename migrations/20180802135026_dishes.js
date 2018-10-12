
exports.up = function (knex, Promise) {
  return knex.schema.createTable('dishes', function (tbl) {
    tbl.increments();

    tbl
      .string('name', 100)
      .notNullable()
      .unique()
      .defaultTo('Not Provided')

    tbl.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
