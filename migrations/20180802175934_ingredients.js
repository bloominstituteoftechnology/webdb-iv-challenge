exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments()
    
        tbl
        .string('name')
        .notNullable()
        .unique();
    
        tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    
    })      
  }

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};
