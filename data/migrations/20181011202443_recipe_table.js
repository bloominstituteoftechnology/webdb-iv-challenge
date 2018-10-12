//ID (primary KEY)
//name
//dish_ID (foreign KEY)
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table) {
      table.increments();
      table.string('recipe', 50).notNullable();
      table
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('recipes');
};


// tbl
//      .integer('cohort_id')
//      .unsigned()
//      .references('id')
//      .inTable('students');