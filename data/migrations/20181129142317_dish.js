
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', tbl => {
      tbl.increments();
      tbl.string('dish_name', 255).unique();

      tbl.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};
