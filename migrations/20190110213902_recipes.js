
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table   =>  {
      table.increments();
      table.string('name').notNullable();
      table.string('ingredient').notNullable();
      table.float('quantity').notNullable();
      table.string('unit').notNullable();
      table.integer('dish_id').notNullable().unsigned();
      table.foreign('dish_id').references('id').on('dishes');
  })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('recipes');
};
