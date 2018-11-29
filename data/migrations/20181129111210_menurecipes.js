
exports.up = function(knex, Promise) {
  return knex.schema
  //dishes
    .createTable('dishes', tbl => {
      tbl.increments('id').primary();
      tbl.string('name', 128).unique().notNullable();
    })
  
  //recipes
    .createTable('recipes', tbl => {
      tbl.increments('id').primary();
      tbl.string('name', 128).unique().notNullable();
      tbl.string('dishId', 3).references('dishes.id');
    })

  //ingredients
    .createTable('ingredients', tbl => {
      tbl.increments('id').primary();
      tbl.string('name', 128).notNullable();
      tbl.string('recipeId').references('recipes.id');
      tbl.float('quantity', 8, 2).notNullable();
      tbl.string('unit', 16);
    })

  //instructions
    .createTable('steps', tbl => {
      tbl.integer('step');
      tbl.text('instruction').notNullable();
      tbl.string('recipeId').references('recipes.id');
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
