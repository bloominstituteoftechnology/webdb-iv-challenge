exports.up = function (knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
      tbl.increments();
      tbl.string('dish_name', 128).notNullable().unique();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema
      .dropTableIfExists('dishes')
}; 