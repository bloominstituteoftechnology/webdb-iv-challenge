
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
        tbl.increments();
        tbl
            .string('recipe')
            .notNullable()
            .unique('recipe_name')
        tbl
            .interger('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('recipes')
  };