
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    //pk
    tbl.increments();

    tbl.string('name', 128).notNullable().unique().defaultTo('Not Provided');
  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists('dishes');
};
