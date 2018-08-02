
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
        tbl.increments();
        tbl.string('name', 120).notNullable().unique();
        
        tbl.text('quantity').notNullable();     
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes')   
          
    })
  };
  
  exports.down = function(knex, Promise) {
          //drop this table
      return knex.schema.dropTableIfExists('ingredients')
  };