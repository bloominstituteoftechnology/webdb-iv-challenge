
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table =>{
      table.increments();
      table.string('recipeName').notNullable().unique();
      // dish id
      table.integer('dishId').unsigned();
      table.foreign('dishId').references('id').on('dishes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
