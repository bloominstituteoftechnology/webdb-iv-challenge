exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    tbl.increments();
    tbl
      .string('ingredients')
      .notNullable()
      .unique('ingre_name');
    tbl.integer('count').notNullable();
    tbl
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
