
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id').references('id').inTable('recipies');
      tbl.integer('ingredient_id').references('id').inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
