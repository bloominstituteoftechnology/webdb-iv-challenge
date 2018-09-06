
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments();

    tbl
      .string('name', 120)
      .notNullable()
      .unique('recipe');

    tbl
      .integer('dish_id')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
