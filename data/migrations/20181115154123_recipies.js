exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipies', tbl => {
    // primary key
    tbl.increments();
    // name field
    tbl.string('name', 255).notNullable();
    // foreign key for meal
    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {};
