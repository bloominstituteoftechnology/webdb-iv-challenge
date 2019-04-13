
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
      table.increments();
      table.string('Recipe_Name').notNullable().unique();
      table.integer('Dish_Id').unsigned();
      table.foreign('Dish_Id').references('id').on('dishes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
