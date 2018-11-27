
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('recipe_id');
    
    tbl
      .integer('dish_id')
      .unsigned()
      .notNullable();

    tbl
      .foreign('dish_id')
      .references('dish_id')
      .inTable('dishes');

    tbl
      .string('name', 64)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};


