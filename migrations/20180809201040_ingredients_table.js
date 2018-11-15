
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', ingredients => {
      ingredients.increments();
      ingredients
        .text('name')
        .notNullable()
        .unique();

    ingredients
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
  })
};

exports.down = function(knex, Promise) {
  
};
