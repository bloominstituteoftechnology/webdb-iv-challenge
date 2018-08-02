exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(ingredients) {
        ingredients.increments();
        
        ingredients
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');

        ingredients.string('ingredient').notNullable();
        ingredients.integer('quantity').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  };