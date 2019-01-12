
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', table => {
        table.increments();
        table.integer('Recipe_Id').unsigned();
        table.foreign('Recipe_Id').references('id').on('recipes');
        table.integer('Step_Number').notNullable();
        table.integer('Ingredient_Id').unsigned();
        table.foreign('Ingredient_Id').references('id').on('ingredients');
        table.float('quantity').notNullable();
        table.string('instructions').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
  };