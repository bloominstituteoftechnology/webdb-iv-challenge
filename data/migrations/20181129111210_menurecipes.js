
exports.up = function(knex, Promise) {
  return knex.schema
  //dishes
    .createTable('dishes', dishes => {
      dishes.increments('id').primary();
      dishes.string('name', 128).unique().notNullable();
    })
  
  //recipes
    .createTable('recipes', recipes => {
      recipes.increments('id').primary();
      recipes.string('name', 128).unique().notNullable();
      recipes.string('dishId', 3).references('dishes.id');
    })

  //ingredients
    .createTable('ingredients', ingredients => {
      ingredients.increments('id').primary();
      ingredients.string('name', 128).notNullable();
      ingredients.string('recipeId').references('recipes.id');
      ingredients.float('quantity', 8, 2).notNullable();
      ingredients.string('unit', 16);
    })

  //instructions
    .createTable('steps', steps => {
      steps.integer('step');
      steps.text('instruction').notNullable();
      steps.string('recipeId').references('recipes.id');
    })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('dishes'),
    knex.schema.dropTableIfExists('recipes'),
    knex.schema.dropTableIfExists('ingredients'),
    knex.schema.dropTableIfExists('steps'),
  ])
};