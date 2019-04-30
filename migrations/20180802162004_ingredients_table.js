exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
    tbl.increments('id').primary();
    tbl.integer('recipe_id').unsigned();
    tbl
      .foreign('recipe_id')
      .references('id')
      .inTable('recipes');
    tbl.string('name').notNullable();
    tbl.string('quantity').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
