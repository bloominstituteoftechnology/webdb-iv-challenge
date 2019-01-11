
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', (ingredients) => {
        ingredients.increments();
        ingredients.string("ingredient_name").notNullable().unique();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};
