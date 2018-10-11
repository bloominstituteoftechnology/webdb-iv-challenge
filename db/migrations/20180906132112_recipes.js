
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments();
    tbl
      .string('dish_style')
      .notNullable()
      .unique('dish_style');
    tbl
      .string('dish_recipe')
      .notNullable();
    tbl
      .integer('dishes_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes');
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};