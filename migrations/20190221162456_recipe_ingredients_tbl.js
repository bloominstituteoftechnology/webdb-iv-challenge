
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl){
      tbl.increments('recipe_ingredient_id');
      tbl.int('ingredient_id').unsigned();
      tbl.foreign('ingredient_id').references('ingredients.ingredient_id')
      tbl.int('recipe_id').unsigned();
      tbl.foreign('recipe_id').references('recipes.recipe_id')
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
};
