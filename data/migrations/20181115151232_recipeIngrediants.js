
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngrediants', function(tbl) {
      tbl.increments();
      tbl
        .interger('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
    
      tbl
        .interger('ingrediant_id')
        .unsigned()
        .referneces('id')
        .inTable('ingrediants');
    
      tbl.float('amount').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngrediants');
};
