
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', tbl => {
      tbl.increments(); 
      tbl
        .integer('step_number')
        .notNullable(); 
      tbl
        .string('instruction')
        .notNullable(); 
      tbl 
        .integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes'); 
  })
};

exports.down = function(knex, Promise) {
  
};
