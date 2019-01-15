
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table=>{
      table.increments();
      table.string('name').notNullable().unique();
      table.integer('dish_id').unsigned();
      table.foreign('dish_id')
        .references('id')
        .on('dish');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
