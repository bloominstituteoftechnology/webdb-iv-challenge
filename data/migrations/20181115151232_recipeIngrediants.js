
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngrediants', function(tbl) {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
    
      tbl
        .integer('ingrediant_id')
        .unsigned()
        .references('id')
        .inTable('ingrediants');
    
      tbl.float('amount').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngrediants');
};
