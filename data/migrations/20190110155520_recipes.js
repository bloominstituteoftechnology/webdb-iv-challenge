
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (recipes) => {
        recipes.increments();
        recipes.string('recipe_name').notNullable();
        recipes.integer("dish_id").unsigned();
        recipes.foreign("dish_id").references('id').on('dishes')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists("recipes")
};
