
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_list', table =>{
      table.increments('id');
      table.integer('dish_id').unsigned();
      table.foreign('dish_id').references('id').on('dish');
      table.string('dish_name').unsigned(); //Does unsigned need to be included for string references?
      table.foreign('dish_name').references('dish_name').on('dish');
      table.integer('recipe_id').unsigned().unique();
      table.foreign('recipe_id').references('id').on('recipe');
      table.string('recipe_name').unsigned().unique();
      table.foreign('recipe_name').references('recipe_name').on('recipe');
      table.string('ingredient').unsigned();
      table.foreign('ingredient').references('ingredient').on('ingredients');
      table.integer('quantity_to_buy');
      table.foreign('quantity_to_buy').references('quantity_of_measurement').on('ingredients')
      table.string('measurement').unsigned();
      table.foreign('measurement').references('measurement_unit').on('ingredients');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('shopping_list');
};
