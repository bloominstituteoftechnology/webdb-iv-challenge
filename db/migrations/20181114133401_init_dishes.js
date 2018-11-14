exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .unique('dish_name')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
