exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();
      tbl.string('recipe_name', 255).notNullable().unique();
      tbl.string('prep_time', 255).notNullable();
      tbl.string('cook_time', 255).notNullable();
      tbl.integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes');

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };
