
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments(); 
      tbl
        .string('recipe_name')
        .notNullable(); 
      tbl
        .integer('dishId')
        .references('id')
        .inTable('dishes');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes'); 
};
