
exports.up = function(knex, Promise) {
    return knex.schema.createTable('IngredientsRecepie', function(tbl){
        tbl.integer('recepieId').references('recepies.id');
        tbl.integer('ingredientId').references('ingredients.id');
 
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('IngredientsRecepie');
  };
