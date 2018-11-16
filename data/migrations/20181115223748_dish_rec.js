
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish_rec', function(tbl) {
    tbl.increments();
    tbl.integer('dish_id')
       .notNullable()
       .unsigned()
       .references('id')
       .inTable('dish')
    tbl.integer('recipe_id')
       .notNullable()
       .unsigned()
       .references('id')
       .inTable('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish_rec')
};
