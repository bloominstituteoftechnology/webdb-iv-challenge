exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(recipes) {
        recipes.increments();
        
        recipes
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');

        recipes.string('recipe').notNullable();
        recipes.text('steps').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };