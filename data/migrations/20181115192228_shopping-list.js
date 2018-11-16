
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping-list', table => {

    // primary key
    // by default it generates an id field and make it autoincrement and the primary key. Default tbl.increments('id');
    table.increments(); // could change to tbl.increments('cohorts_id');

    // other fields
    table.float('quantity', 255); //NUMBER!!!
    table
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredient');
    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipe');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shopping-list');

};
