
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        
        tbl.integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes');

        tbl.integer('ingredient_list_id')
            .unsigned()
            .references('id')
            .inTable('ingredientslists');

        tbl.integer('steps_id')
            .unsigned()
            .references('id')
            .inTable('steps');

        tbl.timestamps(true, true );
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes')
  };
  