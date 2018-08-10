
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', recipes => {
      recipes.increments();
      recipes
        .string('title')
        .notNullable()
        .unique();

    recipes
        .integer('dishId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
  
};
