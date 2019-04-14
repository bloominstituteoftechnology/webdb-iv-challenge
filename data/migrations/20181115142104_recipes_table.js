exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('name', 280).notNullable();
    tbl
      .integer('dishes_id')
      .unsigned()
      .references('id')
      .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
