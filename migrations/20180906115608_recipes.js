exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.string('recipe')
          .notNullable()
          .unique('recipe_name');
        tbl.integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
  };
  
  