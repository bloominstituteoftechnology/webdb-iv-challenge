
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
      tbl.increments();

      tbl
        .string('name', 100)
        .notNullable()
        .unique();

    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
