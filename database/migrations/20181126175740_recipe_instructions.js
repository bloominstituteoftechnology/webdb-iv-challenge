
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_instructions', function(tbl) {
    tbl.increments('id');
    
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable();

    tbl
      .foreign('recipe_id')
      .references('recipe_id')
      .inTable('recipes');

    
    tbl
      .integer('instruction_id')
      .unsigned()
      .notNullable();

    tbl
      .foreign('instruction_id')
      .references('instruction_id')
      .inTable('instructions');
      

    tbl
      .string('amount', 64)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_instructions');
};


