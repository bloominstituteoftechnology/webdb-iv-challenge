
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl) {
    
    tbl.increments().unique()

    tbl
      .integer('recipe_id') 
      .unsigned()
      .notNullable() 
      .references('id')
      .inTable('dishes') 
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    
    tbl.float('quantity').notNullable
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
};
