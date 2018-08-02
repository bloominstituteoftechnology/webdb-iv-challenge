exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('id').primary();
    tbl.integer('dish_id').unsigned();
    tbl
      .foreign('dish_id')
      .references('id')
      .inTable('dishes');
    tbl.string('name').notNullable();
    tbl.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
