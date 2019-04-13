

exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients_list', function(tbl){
      tbl.increments();
      tbl.integer('recipe_id').unsigned().references('recipe.id')
      tbl.integer('ingredient_id').unsigned().references('ingredients.id')
      
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients_list')
  };
