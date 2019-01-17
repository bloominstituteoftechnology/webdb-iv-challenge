exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', table => {
        table.increments();
        table.string('recipe_name').notNullable().unique()
        table.integer('dish_id').unsigned();
        table.foreign('dish_id').references('id').inTable('dish');

       })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe name')
  };