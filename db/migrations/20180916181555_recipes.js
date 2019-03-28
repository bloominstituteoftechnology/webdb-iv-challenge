
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id');
  
        table
            .string('recipe_name', 128)
            .notNullable();

        table
            .integer('dish_id')
            .notNullable()
            .references('id')
            .inTable('dishes');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };