exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
        tbl
            .integer('recipie_id');
    
        tbl 
            .integer('step')
               
        tbl 
            .string('instruction')
      
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('instructions');
};
