exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping-list', function(tbl) {
    tbl.increments('id').primary();

    tbl.integer('recipe_id').unsigned();
    tbl.foreign('recipe_id').references('recipes.id');

    tbl.integer('dish_id').unsigned();
    tbl.foreign('dish_id').references('dishes.id');

    tbl.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shopping-list');
};
