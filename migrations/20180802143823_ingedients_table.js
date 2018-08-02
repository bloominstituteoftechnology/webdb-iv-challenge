
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
        //pk
        tbl.increments();
        //other tables
        tbl.string('name', 120)
          .notNullable()
          .unique();
        
        tbl.text('quantity').notNullable();        
          
    })
  };
  
  exports.down = function(knex, Promise) {
          //drop this table
      return knex.schema.dropTableIfExists('ingredients')
  };