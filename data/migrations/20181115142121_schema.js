
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('dishes', (dishes) => {
      dishes.increments('id').primary();
      dishes.text('name').unique().notNull();
  })
  .createTable('recipes', (recipes) => {
      recipes.increments('id').primary();
      recipes.text('name').notNull();
      recipes.text('dishId').references('dishes.id')
  })
  .createTable('ingredients', (ingredients) => {
      ingredients.increments('id').primary();
      ingredients.text('name').notNull();
      ingredients.integer('recipeId').references('recipes.id');
      ingredients.integer('quantity').notNull();
      ingredients.text('unit').defaultTo('unit');
  })
  .createTable('steps', (steps) => {
      Promise.all([
          steps.integer('stepNumber'),
          steps.integer('recipeId').references('recipes.id'),
      ]).then(() => {
          steps.primary(['stepNumber, recipeId'])
      });
      steps.text('description')
  })
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('ingredients'),
        knex.schema.dropTableIfExists('steps'),
        knex.schema.dropTableIfExists('recipes'),
        knex.schema.dropTableIfExists('dishes'),
      ]);
};
