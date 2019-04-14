
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {

        tbl.increments().unique()

        tbl
          .string('name', 128)
          .notNullable() 
          
        tbl
          .string('instructions')
          .notNullable() 
          
        tbl
          .integer('dish_id') 
          .unsigned()
          .notNullable() 
          .references('id')
          .inTable('dishes') 
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')    
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
