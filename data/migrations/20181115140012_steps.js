
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl
            .increments();
        tbl
            .string('step');
        tbl 
            .integer('sequence');
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes');
       
    })
};


exports.down = function(knex, Promise) {
  
};
