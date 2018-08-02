
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    tbl.increments();

    tbl.string('name', 256)
    .notNullable()
    .unique()
    .defaultTo('Not Provided');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
