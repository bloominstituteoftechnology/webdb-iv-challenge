
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table =>{
      table.increments('id');
      table.string('ingredient').notNullable();
      table.integer('quantity_of_measurement');
      table.string('measurement_unit').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
