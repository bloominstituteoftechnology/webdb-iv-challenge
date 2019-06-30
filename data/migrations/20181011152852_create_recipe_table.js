
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    // id
    tbl.increments();

    // name of recipe
    tbl.string('name', 128).notNullable();

    // reference to the dish-table 'id'
    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
