exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.integer('recipe_id').unsigned();
    tbl.foreign('recipe_id').references('recipe.id');
    tbl.integer('ingredient_id').unsigned();
    tbl.foreign('ingredient_id').references('ingredient.id');
    tbl.string('quantity').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
