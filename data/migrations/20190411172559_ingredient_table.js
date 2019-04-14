
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {

        tbl.increments().unique()

        tbl
          .string('name', 128)
          .notNullable()

        tbl
          .integer('recipe_id') 
          .unsigned()
          .notNullable() 
          .references('id')
          .inTable('dishes') 
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')  

    })    
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
