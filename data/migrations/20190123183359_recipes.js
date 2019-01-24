
exports.up = function(knex, Promise) {
  return knex.schema.createTable(
      'recipes', table => {
          table.increments();
          table.string('recipes').notNullable();
          table.integer('dish_id').unsigned().unique();
          table.foreign('dish_id').references('id').on('dishes')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')  
};
