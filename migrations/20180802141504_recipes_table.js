
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
        //pk
        tbl.increments();
        //other tables
        tbl.string('name', 120)
          .notNullable()
          .unique();
        
        tbl.text('instructions').notNullable();        
          
    })
  };
  
  exports.down = function(knex, Promise) {
          //drop this table
      return knex.schema.dropTableIfExists('recipes')
  };
