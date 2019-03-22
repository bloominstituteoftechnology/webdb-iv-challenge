
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    tbl.increments();
    tbl.string('dish')
       .notNullable()
       .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
