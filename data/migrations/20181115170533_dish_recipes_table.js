
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes_recipes', function(tbl){
      tbl.increments()
      tbl
        .integer('dish_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('dishes');
      tbl
        .integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
      tbl.unique('recipe_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
