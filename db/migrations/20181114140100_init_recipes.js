exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl
      .integer('count')
      .notNullable()
      .defaultTo(1);
    tbl
      .integer('dish_id')
      .notNullable()
      .references('id')
      .inTable('dishes');
    tbl
      .integer('ingredients_id')
      .notNullable()
      .references('id')
      .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
