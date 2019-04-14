
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dish_table', function(tbl) {

        tbl.increments().unique()

        tbl
          .string('name', 128)
          .notNullable()

        tbl
          .integer('recipe_ingredients') 
          .unsigned()
          .notNullable() 
          .references('id')
          .inTable('in') 
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')  
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dish_table')
};
